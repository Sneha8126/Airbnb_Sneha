const Listing = require("./models/listing");
const Review = require("./models/review");
const { listingSchema, reviewSchema } = require("./schema.js");
const ExpressError = require("./utils/ExpressError.js");

export const config = {
  runtime: 'nodejs', // Yeh line Vercel ko batayegi ki Edge nahi, full Node.js use karna hai
};

// 1. Check if User is Logged In
module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You must be logged in to make changes!");
    return res.redirect("/login");
  }
  next();
};

// 2. Save Redirect URL for Post-Login redirection
module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

// 3. Authorization Check: Is Current User the Owner of the Listing?
module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  
  // FIX 1: 'listing.owner._id' ki jagah seedhe 'listing.owner' use kiya
  if (!listing.owner.equals(res.locals.currUser._id)) {
    req.flash("error", "You don't have permission to do that!");
    return res.redirect(`/listings/${id}`);
  }
  next();
};

// 4. Joi Data Validation for Listings
module.exports.validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// 5. Joi Data Validation for Reviews
module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// 6. Authorization Check: Is Current User the Author of the Review?
module.exports.isReviewAuthor = async (req, res, next) => {
  let { id, reviewId } = req.params;
  let review = await Review.findById(reviewId);
  
  // FIX 2: 'review.author._id' ki jagah seedhe 'review.author' use kiya
  if (!review.author.equals(res.locals.currUser._id)) {
    req.flash("error", "You are not the author of this review!");
    return res.redirect(`/listings/${id}`);
  }
  next();
};

// middleware.js ke bilkul niche ye export jodhien
module.exports.isHost = (req, res, next) => {
    // Check karo kya user logged in hai aur uska role 'host' hai
    if (req.user && req.user.role === "host") {
        return next(); // Agar host hai toh aage badhne do
    }
    // Agar host nahi hai toh error flash karo aur wapas listings par bhej do
    req.flash("error", "Access Denied! Only Hosts are allowed to create or manage properties. ❌");
    res.redirect("/listings");
};

// middleware.js ke end me ye export jodhien
module.exports.isGuest = (req, res, next) => {
    if (req.user && req.user.role === "guest") {
        return next(); // Agar guest hai toh booking karne do
    }
    req.flash("error", "Access Denied! Hosts are not allowed to make bookings. ❌");
    res.redirect(`/listings/${req.params.id}`);
};