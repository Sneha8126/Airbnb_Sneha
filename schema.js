const Joi = require('joi');

// 1. Listing Validation Schema
module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),
        
        // FIX: Joi ko bataya ki image string bhi ho sakti hai aur object bhi, aur khali/null bhi ho sakti hai
        image: Joi.alternatives().try(
            Joi.string().allow("", null),
            Joi.object({
                url: Joi.string().allow("", null),
                filename: Joi.string().allow("", null)
            })
        ).allow("", null),
        category: Joi.string().valid(
            "Trending", "Rooms", "Iconic Cities", "Mountains", 
            "Castles", "Amazing Pools", "Camping", "Farms", "Arctic", "Domes", "Boats"
        ).required()
        
    }).required()
});

// 2. Review Validation Schema (Yeh pehle se sahi tha, keeps it robust)
module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required()
    }).required()
});