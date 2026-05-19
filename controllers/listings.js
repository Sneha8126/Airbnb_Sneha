// controllers/listings.js
const Listing = require("../models/listing");

// controllers/listings.js ke andar index function ko update karein:
module.exports.index = async (req, res) => {
    let { search, category, maxPrice } = req.query;
    let queryObj = {};

    // 1. Text Search Box Logic (Title, Location, Country)
    if (search) {
        queryObj.$or = [
            { location: { $regex: search, $options: "i" } },
            { title: { $regex: search, $options: "i" } },
            { country: { $regex: search, $options: "i" } }
        ];
    }

    // 2. Category Icon Slider Filter Logic
    if (category) {
        queryObj.category = category;
    }

    // 3. ADVANCED PRICE MATRIX FILTER LOGIC ($lte means Less Than or Equal to)
    if (maxPrice && maxPrice !== "") {
        queryObj.price = { $lte: Number(maxPrice) };
    }

    // Final database criteria extraction
    const allListings = await Listing.find(queryObj);

    // EJS Template standard variables parsing
    res.render("listings/index.ejs", { 
        allListings, 
        selectedCategory: category || "", 
        search: search || "",
        maxPrice: maxPrice || "" 
    });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id).populate({
    path: "reviews",
    populate: {
      path: "author",
    },
  })
  .populate("owner");
  
  if(!listing){
    req.flash("error"," Listing you requested for does not exist!");
    return res.redirect("/listings");
  }
  console.log(listing);
  res.render("listings/show.ejs", { listing });
};

// 1. CREATE LISTING FLOW
module.exports.createListing = async (req, res, next) => {
    let newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;

    // Multi-file loop handling
    if (typeof req.files !== "undefined" && req.files.length > 0) {
        newListing.image = req.files.map(file => ({
            url: file.path,
            filename: file.filename
        }));
    } else {
        // Fallback default placeholder array if no files uploaded
        newListing.image = [{
            url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?v=4",
            filename: "default"
        }];
    }

    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if(!listing){
    req.flash("error"," Listing you requested for does not exist!");
    return res.redirect("/listings");
  }

  let originalImageUrl = listing.image.url; 
  originalImageUrl = originalImageUrl.replace("/upload","/upload/w_250");
  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

// 2. UPDATE LISTING FLOW
module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    // Agar user ne edit karte waqt nayi photos upload ki hain
    if (typeof req.files !== "undefined" && req.files.length > 0) {
        const newImages = req.files.map(file => ({
            url: file.path,
            filename: file.filename
        }));
        // Purani photos ke sath nayi wali images ko override/push kar dena
        listing.image = newImages;
        await listing.save();
    }

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success","Listing Deleted!");
  res.redirect("/listings");
};