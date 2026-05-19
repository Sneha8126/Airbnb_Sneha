const User = require("../models/user");
const {sendWelcomeEmail} = require("../utils/sendEmail.js");
const crypto = require("crypto");
const { sendResetEmail } = require("../utils/sendEmail.js");

module.exports.renderSignupForm = (req,res)=>{
    res.render("users/signup.ejs");
}

module.exports.signup = async (req, res, next) => {
    try {
        let { username, email, password, role } = req.body;
        const newUser = new User({ email, username, role });
        
        // Passport standard registration mechanism
        const registeredUser = await User.register(newUser, password);
        
        req.login(registeredUser, async (err) => {
            if (err) {
                return next(err);
            }

            // =========================================================
            // LIVE TRIGGER: Background execution for Email automation
            // =========================================================
            // Isko async wrapper bina block kiye send kar dega
            sendWelcomeEmail(registeredUser.email, registeredUser.username);

            req.flash("success", "Welcome to Wanderlust!");
            res.redirect("/listings");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

module.exports.renderLoginForm = (req,res)=>{
    res.render("users/login.ejs")
}

module.exports.login = async(req,res)=>{
req.flash("success","Welcome back to Wanderlust!");
let redirectUrl = res.locals.redirectUrl || "/listings";
res.redirect(redirectUrl);
}



// 1. Render Forgot Password Form
module.exports.renderForgotForm = (req, res) => {
    res.render("users/forgot.ejs");
};

// controllers/users.js ke andar forgotPassword function ko isse replace karein:

module.exports.forgotPassword = async (req, res) => {
    try {
        let { email } = req.body;
        const user = await User.findOne({ email: email });
        
        if (!user) {
            req.flash("error", "No account with that email address exists.");
            return res.redirect("/forgot");
        }

        // Token Generation Loop
        const token = crypto.randomBytes(20).toString("hex");
        
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
        await user.save();

        console.log("Token successfully saved in DB for user:", user.username);

        const resetLink = `http://localhost:8080/reset/${token}`;
        
        // Dynamic wait check execution
        await sendResetEmail(user.email, resetLink);

        req.flash("success", `An e-mail has been sent to ${user.email} with further instructions.`);
        res.redirect("/login");

    } catch (err) {
        console.log("CRITICAL FORGOT PASSWORD ERROR:", err);
        req.flash("error", "Something went wrong while processing your request.");
        res.redirect("/forgot");
    }
};

// 3. Render Reset Password Form (Verify Token first)
module.exports.renderResetForm = async (req, res) => {
    let { token } = req.params;
    const user = await User.findOne({ 
        resetPasswordToken: token, 
        resetPasswordExpires: { $gt: Date.now() } // Token must be greater than current time
    });

    if (!user) {
        req.flash("error", "Password reset token is invalid or has expired.");
        return res.redirect("/forgot");
    }

    res.render("users/reset.ejs", { token });
};

// 4. Update New Password in DB
module.exports.resetPassword = async (req, res) => {
    let { token } = req.params;
    let { password, confirmPassword } = req.body;

    if(password !== confirmPassword) {
        req.flash("error", "Passwords do not match.");
        return res.redirect(`/reset/${token}`);
    }

    const user = await User.findOne({ 
        resetPasswordToken: token, 
        resetPasswordExpires: { $gt: Date.now() } 
    });

    if (!user) {
        req.flash("error", "Password reset token is invalid or has expired.");
        return res.redirect("/forgot");
    }

    // Passport-Local-Mongoose standard password reset utility method
    await user.setPassword(password);
    user.resetPasswordToken = undefined; // Clear tokens after usage
    user.resetPasswordExpires = undefined;
    await user.save();

    req.flash("success", "Success! Your password has been changed. You can log in now.");
    res.redirect("/login");
};

module.exports.logout = (req,res,next)=>{
    req.logout((err)=>{
        if(err){
          return   next(err);
        }
        req.flash("success","you are logged out!");
        res.redirect("/listings");
    })
}