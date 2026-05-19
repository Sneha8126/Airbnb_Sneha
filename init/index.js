const path = require("path");
require('dotenv').config({ path: path.join(__dirname, "../.env") }); 

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const dbUrl = process.env.ATLASDB_URL || "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
    initDB(); 
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    
    // FIXED: Now mapping both valid owner ID AND forcing/checking categories existence
    initData.data = initData.data.map((obj) => ({
      ...obj,
      owner: "652d0081ae547c5d37e56b5f", 
      // Agar obj.category existing hai toh wahi rahe, nahi toh default "Trending" set ho jaye
      category: obj.category || "Trending" 
    }));
    
    await Listing.insertMany(initData.data);
    console.log("data was initialized successfully with dynamic categories!");
  } catch (err) {
    console.log("Error during initialization:", err);
  }
};