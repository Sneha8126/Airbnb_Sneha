// init/data.js
const sampleListings = [
  // ==========================================
  // 1. TRENDING CATEGORY (10 Listings)
  // ==========================================
  {
    title: "Cozy Beachfront Cabin",
    description: "Escape to this beautiful cabin right next to the white sand beaches. Perfect for weekend getaways.",
    image: [
      { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80", filename: "Main_Exterior" },
      { url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", filename: "Luxury_Bedroom" },
      { url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80", filename: "Modern_Bathroom" },
      { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1533759413974-9e15f3b745ac?auto=format&fit=crop&w=1200&q=80", filename: "Balcony_View" }
    ],
    price: 2500, location: "Goa", country: "India", category: "Trending"
  },
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: [
      { url: "https://ecogroupresort.com/ecocozybeachfrontresort/assets/images/gallery/accommodation/beachfront-pool-villa/img-1.jpg", filename: "Main_Exterior" },
      { url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80", filename: "Cozy_Bedroom" },
      { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", filename: "Clean_Bathroom" },
      { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80", filename: "Outdoor_Deck" }
    ],
    price: 1500, location: "Malibu", country: "United States", category: "Trending"
  },
  {
    title: "Premium Sunset Villa",
    description: "A luxury private villa with panoramic ocean views and a private deck overlooking the sea waves.",
    image: [
      { url: "https://tse4.mm.bing.net/th/id/OIP.rjYROhMm_xRO0fXaYQCjtwHaEJ?pid=Api&h=220&P=0", filename: "Main_Exterior" },
      { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80", filename: "Luxury_Bedroom" },
      { url: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80", filename: "Attached_Bathroom" },
      { url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80", filename: "Sunset_View" }
    ],
    price: 8000, location: "Varkala", country: "India", category: "Trending"
  },
  {
    title: "The Neon Penthouse",
    description: "Experience the luxury neon nightlife from this premium glass skyscraper floor.",
    image: [
      { url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80", filename: "Main_View" },
      { url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80", filename: "Modern_Bedroom" },
      { url: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1200&q=80", filename: "Sleek_Bathroom" },
      { url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=80", filename: "Skyscraper_View" }
    ],
    price: 11000, location: "Las Vegas", country: "United States", category: "Trending"
  },
  {
    title: "Boho Chic Beach Shack",
    description: "A minimalist bohemian wooden hut steps away from pristine blue shorelines.",
    image: [
      { url: "https://images.unsplash.com/photo-1533759413974-9e15f3b745ac?auto=format&fit=crop&w=1200&q=80", filename: "Main_View" },
      { url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80", filename: "Boho_Bedroom" },
      { url: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80", filename: "Rustic_Bathroom" },
      { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80", filename: "Beach_Shore_View" }
    ],
    price: 3200, location: "Havelock Island", country: "India", category: "Trending"
  },
  {
    title: "Cozy Beachfront Resort",
    description: "Escape to this beautiful cabin right next to the white sand beaches. Perfect for weekend getaways.",
    image: [
      { url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=cover&w=1200", filename: "Main_Resort" },
      { url: "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=1200&q=80", filename: "Premium_Bedroom" },
      { url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80", filename: "Resort_Bathroom" },
      { url: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80", filename: "Ocean_Front_View" }
    ],
    price: 3500, location: "Goa", country: "India", category: "Trending"
  },
  {
    title: "Luxury Ocean View Villa",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: [
      { url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=cover&w=1200", filename: "Main_Villa" },
      { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80", filename: "Ocean_Bed_Room" },
      { url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80", filename: "Luxury_Bathroom" },
      { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80", filename: "Infinity_Sea_View" }
    ],
    price: 1500, location: "Malibu", country: "United States", category: "Trending"
  },
  {
    title: "Sunset Serenade Villa",
    description: "A luxury private villa with panoramic ocean views and a private deck overlooking the sea waves.",
    image: [
      { url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=cover&w=1200", filename: "Main_Facade" },
      { url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", filename: "Master_Bedroom" },
      { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", filename: "Spa_Bathroom" },
      { url: "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80", filename: "Sunset_Deck" }
    ],
    price: 9000, location: "Varkala", country: "India", category: "Trending"
  },
  {
    title: "The Glass Pavilion",
    description: "An architectural marvel surrounded by serene woodlands. Experience luxury living in a fully transparent design.",
    image: [
      { url: "https://picsum.photos/id/1015/1200/800", filename: "Main_Glasshouse" },
      { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", filename: "Glass_Bedroom" },
      { url: "https://images.unsplash.com/photo-1620626011761-996317b6979a?auto=format&fit=crop&w=1200&q=80", filename: "Glass_Bathroom" },
      { url: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&w=1200&q=80", filename: "Woodland_View" }
    ],
    price: 4500, location: "Alibaug", country: "India", category: "Trending"
  },
  {
    title: "Boho Hideaway Studio",
    description: "A beautifully curated bohemian studio apartment located steps away from peaceful coastal cliffs.",
    image: [
      { url: "https://picsum.photos/id/1040/1200/800", filename: "Main_Studio" },
      { url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80", filename: "Boho_Bedroom" },
      { url: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80", filename: "Boho_Bathroom" },
      { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1200&q=80", filename: "Cliffside_View" }
    ],
    price: 2100, location: "Gokarna", country: "India", category: "Trending"
  },
  {
    title: "Urban Industrial Loft",
    description: "Sleek brick walls and high ceilings make this industrial penthouse perfect for a premium city getaway.",
    image: [
      { url: "https://picsum.photos/id/1069/1200/800", filename: "Main_Penthouse" },
      { url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80", filename: "Industrial_Bedroom" },
      { url: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1200&q=80", filename: "Sleek_Bathroom" },
      { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80", filename: "City_Skyline" }
    ],
    price: 6500, location: "Bangalore", country: "India", category: "Trending"
  },
  {
    title: "Oceanfront Palms Villa",
    description: "A private tropical paradise featuring open-air decks, swaying palm trees, and an untouched private beach stretch.",
    image: [
      { url: "https://picsum.photos/id/1057/1200/800", filename: "Main_Resort" },
      { url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", filename: "Tropical_Bedroom" },
      { url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80", filename: "Bathroom" },
      { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80", filename: "Beach_Palms" }
    ],
    price: 11000, location: "Kovalam", country: "India", category: "Trending"
  },

  // ==========================================
  // 2. ROOMS CATEGORY (9 Listings)
  // ==========================================
  {
    title: "Modern Downtown Studio",
    description: "Stay in the heart of the city with skyline views. Walking distance to all major transit networks.",
    image: [
      { url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80", filename: "Studio_Main" },
      { url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80", filename: "Bed_Area" },
      { url: "https://images.unsplash.com/photo-1620626011761-996317b6979a?auto=format&fit=crop&w=1200&q=80", filename: "Bathroom_Setup" },
      { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80", filename: "Skyline_Window" }
    ],
    price: 3500, location: "Mumbai", country: "India", category: "Rooms"
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: [
      { url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80", filename: "Main_Interior" },
      { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80", filename: "Loft_Bed" },
      { url: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1200&q=80", filename: "Compact_Bathroom" },
      { url: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80", filename: "Urban_View" }
    ],
    price: 1200, location: "New York City", country: "United States", category: "Rooms"
  },
  {
    title: "Artist's Sunny Brick Room",
    description: "A loft room filled with master canvas art, plants, and massive vintage glass windows.",
    image: [
      { url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80", filename: "Main_Art_Room" },
      { url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80", filename: "Brick_Bedroom" },
      { url: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80", filename: "Aesthetic_Bathroom" },
      { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80", filename: "Sunny_Window" }
    ],
    price: 1800, location: "Brooklyn", country: "United States", category: "Rooms"
  },
  {
    title: "Minimalist Japandi Room",
    description: "Peaceful fusion room of Japanese and Scandinavian architecture with tatami mats.",
    image: [
      { url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80", filename: "Tatami_Lounge" },
      { url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", filename: "Minimalist_Bed" },
      { url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80", filename: "Japandi_Bath" },
      { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80", filename: "Zen_Garden_View" }
    ],
    price: 2800, location: "Kyoto", country: "Japan", category: "Rooms"
  },
  {
    title: "Vintage Botanical Suite",
    description: "Cozy boutique room surrounded by indoor creepers and historical mid-century furniture setup.",
    image: [
      { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", filename: "Main_Suite" },
      { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80", filename: "Botanical_Bed" },
      { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", filename: "Vintage_Bathroom" },
      { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", filename: "Greenery_Balcony" }
    ],
    price: 2200, location: "Pondicherry", country: "India", category: "Rooms"
  },
  {
    title: "The Writers Sunlit Nook",
    description: "A cozy, quiet room filled with vintage bookshelves and a massive bay window overlooking the street garden.",
    image: [
      { url: "https://picsum.photos/id/20/1200/800", filename: "Main_Library_Nook" },
      { url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80", filename: "Bed_Corner" },
      { url: "https://images.unsplash.com/photo-1620626011761-996317b6979a?auto=format&fit=crop&w=1200&q=80", filename: "Classic_Bathroom" },
      { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80", filename: "Garden_View" }
    ],
    price: 1400, location: "Pondicherry", country: "India", category: "Rooms"
  },
  {
    title: "Minimalist Nordic Studio",
    description: "Clean lines, bright pine wood furniture, and monochrome aesthetics define this peaceful boutique flat room.",
    image: [
      { url: "https://picsum.photos/id/1062/1200/800", filename: "Main_Nordic_Studio" },
      { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80", filename: "Nordic_Bedroom" },
      { url: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1200&q=80", filename: "Nordic_Bathroom" },
      { url: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80", filename: "Snowy_Window" }
    ],
    price: 3100, location: "Oslo", country: "Norway", category: "Rooms"
  },
  {
    title: "Vintage Brick Wall Loft",
    description: "A brick-walled room containing customized industrial pipe decorations and warm ambient Edison lighting setup.",
    image: [
      { url: "https://picsum.photos/id/1060/1200/800", filename: "Main_Loft" },
      { url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80", filename: "Loft_Bedroom" },
      { url: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80", filename: "Loft_Bathroom" },
      { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/1060/1200/800", filename: "Edison_Lounge" }
    ],
    price: 2400, location: "Chicago", country: "United States", category: "Rooms"
  },
  {
    title: "Greenhouse Botanical Suite",
    description: "Immerse yourself in nature within this indoor-garden styled room packed with beautiful air-purifying exotic ferns.",
    image: [
      { url: "https://picsum.photos/id/884/1200/800", filename: "Main_Greenhouse" },
      { url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", filename: "Green_Bedroom" },
      { url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80", filename: "Eco_Bathroom" },
      { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", filename: "Fern_Balcony" }
    ],
    price: 2600, location: "Dehradun", country: "India", category: "Rooms"
  },

  // ==========================================
  // 3. ICONIC CITIES CATEGORY (9 Listings)
  // ==========================================
  {
    title: "Historic Loft in Tokyo",
    description: "Experience the bustling neon streets of Tokyo from this beautifully designed heritage apartment.",
    image: [
      { url: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80", filename: "Main_Exterior" },
      { url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80", filename: "Traditional_Futon_Room" },
      { url: "https://images.unsplash.com/photo-1620626011761-996317b6979a?auto=format&fit=crop&w=1200&q=80", filename: "Futuristic_Bathroom" },
      { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=1200&q=80", filename: "Neon_Street_View" }
    ],
    price: 7500, location: "Tokyo", country: "Japan", category: "Iconic Cities"
  },
  {
    title: "Modern Apartment in Tokyo",
    description: "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: [
      { url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=1200&q=80", filename: "Main_Lounge" },
      { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80", filename: "Modern_Bedroom" },
      { url: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1200&q=80", filename: "Sleek_Bathroom" },
      { url: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80", filename: "City_District_View" }
    ],
    price: 2000, location: "Tokyo", country: "Japan", category: "Iconic Cities"
  },
  {
    title: "Charming Parisian Studio",
    description: "Wake up with a clear unhindered balcony view of the Eiffel Tower while drinking fresh coffee.",
    image: [
      { url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80", filename: "Eiffel_Balcony_View" },
      { url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", filename: "Parisian_Bedroom" },
      { url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80", filename: "Classic_Bathroom" },
      { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80", filename: "Paris_Street_View" }
    ],
    price: 9500, location: "Paris", country: "France", category: "Iconic Cities"
  },
  {
    title: "Manhattan Luxury Skyline Loft",
    description: "Ultra-modern industrial loft equipped with ceiling windows looking over Central Park infrastructure.",
    image: [
      { url: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80", filename: "Main_Skyline_Loft" },
      { url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80", filename: "Luxury_Bedroom" },
      { url: "https://images.unsplash.com/photo-1620626011761-996317b6979a?auto=format&fit=crop&w=1200&q=80", filename: "Premium_Bathroom" },
      { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80", filename: "Central_Park_View" }
    ],
    price: 13000, location: "New York", country: "United States", category: "Iconic Cities"
  },
  {
    title: "Colonial Heritage Mansion Suite",
    description: "Immerse yourself in rich culture within this yellow colonial structural flat near Central Market.",
    image: [
      { url: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=1200&q=80", filename: "Main_Heritage_Gate" },
      { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80", filename: "Royal_Suite_Bedroom" },
      { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", filename: "High_Ceiling_Bathroom" },
      { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=1200&q=80", filename: "Mansion_Balcony" }
    ],
    price: 4000, location: "Kolkata", country: "India", category: "Iconic Cities"
  },
  {
    title: "Skyline Overlook Penthouse",
    description: "Watch the massive metropolis come alive from your private 45th-floor balcony view over the financial center.",
    image: [
      { url: "https://picsum.photos/id/122/1200/800", filename: "Main_Penthouse_View" },
      { url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80", filename: "Penthouse_Bedroom" },
      { url: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80", filename: "Glass_Bathroom" },
      { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/122/1200/800", filename: "Financial_District_View" }
    ],
    price: 12500, location: "Singapore", country: "Singapore", category: "Iconic Cities"
  },
  {
    title: "Heritage Canal Flat",
    description: "A gorgeous wood-beamed traditional flat located directly over the historic flowing water channels of the old city.",
    image: [
      { url: "https://picsum.photos/id/292/1200/800", filename: "Main_Canal_View" },
      { url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", filename: "Vintage_Italian_Bedroom" },
      { url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80", filename: "Classic_Bathroom" },
      { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/292/1200/800", filename: "Waterway_Gondola_View" }
    ],
    price: 8800, location: "Venice", country: "Italy", category: "Iconic Cities"
  },
  {
    title: "The London Brick Studio",
    description: "A high-end, contemporary studio apartment sitting right down the lane from historic tube lines and museums.",
    image: [
      { url: "https://picsum.photos/id/319/1200/800", filename: "Main_Brick_Facade" },
      { url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80", filename: "London_Suite_Bedroom" },
      { url: "https://images.unsplash.com/photo-1620626011761-996317b6979a?auto=format&fit=crop&w=1200&q=80", filename: "Attached_Washroom" },
      { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/319/1200/800", filename: "London_Street_View" }
    ],
    price: 9500, location: "London", country: "United Kingdom", category: "Iconic Cities"
  },
  {
    title: "Harbor View Luxury Suite",
    description: "Wake up to stunning architecture and dynamic ships cruising across the operational harbor line docks.",
    image: [
      { url: "https://picsum.photos/id/405/1200/800", filename: "Main_Harbor_View" },
      { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80", filename: "Luxury_Bedroom" },
      { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", filename: "Modern_Bathroom" },
      { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/405/1200/800", filename: "Opera_House_Horizon" }
    ],
    price: 10500, location: "Sydney", country: "Australia", category: "Iconic Cities"
  },

  // ==========================================
  // 4. MOUNTAINS CATEGORY (9 Listings)
  // ==========================================
  {
    title: "Alpine Wooden Chalet",
    description: "Stunning wooden chalet surrounded by snow-capped peaks. Fresh air and beautiful hiking trails.",
    image: [
      { url: "https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?auto=format&fit=crop&w=1200&q=80", filename: "Main_Chalet_Exterior" },
      { url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80", filename: "Insulated_Bedroom" },
      { url: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80", filename: "Geyser_Bathroom" },
      { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80", filename: "Fireplace_Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?auto=format&fit=crop&w=1200&q=80", filename: "Snow_Peak_View" }
    ],
    price: 6000, location: "Manali", country: "India", category: "Mountains"
  },
  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: [
      { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80", filename: "Main_Cabin_View" },
      { url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", filename: "Timber_Bedroom" },
      { url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80", filename: "Rustic_Washroom" },
      { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80", filename: "Pine_Forest_View" }
    ],
    price: 1000, location: "Aspen", country: "United States", category: "Mountains"
  },
  {
    title: "Cloud Nine Mountain Cabin",
    description: "Perched high on a ridge where clouds sweep inside your window balcony deck every morning.",
    image: [
      { url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80", filename: "Main_Ridge_View" },
      { url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=1200&q=80", filename: "Hills_Bedroom" },
      { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", filename: "Modern_Bathroom" },
      { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80", filename: "Misty_Valley" }
    ],
    price: 5200, location: "Munnar", country: "India", category: "Mountains"
  },
  {
    title: "Himalayan Stone Hideaway",
    description: "Handcrafted traditional river-stone lodge overlooking intense green apple valley orchards.",
    image: [
      { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80", filename: "Main_Stone_Lodge" },
      { url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80", filename: "Warm_Bedroom" },
      { url: "https://images.unsplash.com/photo-1620626011761-996317b6979a?auto=format&fit=crop&w=1200&q=80", filename: "Stone_Bathroom" },
      { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80", filename: "Orchard_View" }
    ],
    price: 4800, location: "Kasol", country: "India", category: "Mountains"
  },
  {
    title: "Swiss Valley Glass Cabin",
    description: "Premium glass facade structural cottage located at the direct base of massive ice slopes.",
    image: [
      { url: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80", filename: "Main_Glass_Facade" },
      { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80", filename: "Panoramic_Bedroom" },
      { url: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1200&q=80", filename: "Luxury_Washroom" },
      { url: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80", filename: "Glacier_Slopes" }
    ],
    price: 14000, location: "Zermatt", country: "Switzerland", category: "Mountains"
  },
  {
    title: "Pine Crest Ridge Chalet",
    description: "A stunning handcrafted stone and cedar wood cabin situated right on the peak edge of alpine valley ridges.",
    image: [
      { url: "https://picsum.photos/id/413/1200/800", filename: "Main_Cedar_Cabin" },
      { url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80", filename: "Cozy_Mountain_Bed" },
      { url: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80", filename: "Attached_Bathroom" },
      { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/413/1200/800", filename: "Valley_Ridge" }
    ],
    price: 5400, location: "Shimla", country: "India", category: "Mountains"
  },
  {
    title: "Mist & Peak Cozy Lodge",
    description: "Watch heavy layers of morning fog settle into deep valleys right from your heated private wooden balcony porch.",
    image: [
      { url: "https://picsum.photos/id/343/1200/800", filename: "Main_Lodge" },
      { url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", filename: "Heated_Bedroom" },
      { url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80", filename: "Modern_Bathroom" },
      { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/343/1200/800", filename: "Misty_Balcony" }
    ],
    price: 4200, location: "Dharamshala", country: "India", category: "Mountains"
  },
  {
    title: "The Snowy Horizon Cabin",
    description: "A heavily insulated dynamic glass A-frame chalet standing right below high glaciated ice peaks lines.",
    image: [
      { url: "https://picsum.photos/id/447/1200/800", filename: "Main_A_Frame_Chalet" },
      { url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80", filename: "Attic_Bedroom" },
      { url: "https://images.unsplash.com/photo-1620626011761-996317b6979a?auto=format&fit=crop&w=1200&q=80", filename: "Heated_Bathroom" },
      { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/447/1200/800", filename: "Glacier_Horizon" }
    ],
    price: 13500, location: "Innsbruck", country: "Austria", category: "Mountains"
  },
  {
    title: "Highland Stone Hideaway",
    description: "An authentic rustic mountain retreat built with natural gray granite stone block structures and indoor fireplace channels.",
    image: [
      { url: "https://picsum.photos/id/1036/1200/800", filename: "Main_Granite_Lodge" },
      { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80", filename: "Warm_Highland_Bed" },
      { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", filename: "Rustic_Bathroom" },
      { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/1036/1200/800", filename: "Cold_Desert_Peaks" }
    ],
    price: 4900, location: "Leh Ladakh", country: "India", category: "Mountains"
  },

  // ==========================================
  // 5. CASTLES CATEGORY (9 Listings)
  // ==========================================
  {
    title: "The Royal Heritage Castle",
    description: "Live like royalty in this massive medieval castle featuring authentic grand halls and lush gardens.",
    image: [
      { url: "https://images.unsplash.com/photo-1508849789987-4e5333c12b78?auto=format&fit=crop&w=1200&q=80", filename: "Main_Fortress_Look" },
      { url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", filename: "Royal_Mahal_Bedroom" },
      { url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80", filename: "Marble_Bathroom" },
      { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1508849789987-4e5333c12b78?auto=format&fit=crop&w=1200&q=80", filename: "Courtyard_Gardens" }
    ],
    price: 15000, location: "Udaipur", country: "India", category: "Castles"
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: [
      { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80", filename: "Main_Tuscan_Villa" },
      { url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80", filename: "Heritage_Bedroom" },
      { url: "https://images.unsplash.com/photo-1620626011761-996317b6979a?auto=format&fit=crop&w=1200&q=80", filename: "Tuscan_Bathroom" },
      { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80", filename: "Vineyard_Slopes" }
    ],
    price: 2500, location: "Florence", country: "Italy", category: "Castles"
  },
  {
    title: "Medieval Scottish Tower",
    description: "Authentic 14th-century spiral-stair fortress castle complete with shield vaults and iron armors.",
    image: [
      { url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80", filename: "Main_Tower_Fort" },
      { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80", filename: "Stone_Vault_Bedroom" },
      { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", filename: "Chamber_Washroom" },
      { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80", filename: "Highland_Horizon" }
    ],
    price: 19000, location: "Edinburgh", country: "United Kingdom", category: "Castles"
  },
  {
    title: "French Renaissance Chateau",
    description: "An elegant white-stone castle mansion settled right inside premium grape vineyards fields.",
    image: [
      { url: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=1200&q=80", filename: "Chateau_Main_Look" },
      { url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80", filename: "Renaissance_Bedroom" },
      { url: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80", filename: "Royal_Chamber_Bath" },
      { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=1200&q=80", filename: "Grape_Vineyards" }
    ],
    price: 22000, location: "Loire Valley", country: "France", category: "Castles"
  },
  {
    title: "Fortress Palace of Rajasthan",
    description: "Indulge in royal structural design with hand-painted fresco halls and heavy gold arches.",
    image: [
      { url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80", filename: "Main_Palace_Gate" },
      { url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", filename: "Maharaja_Suite_Bed" },
      { url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80", filename: "Royal_Bathroom" },
      { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80", filename: "Pink_City_View" }
    ],
    price: 17500, location: "Jaipur", country: "India", category: "Castles"
  },
  {
    title: "Mughal Heritage Palace",
    description: "Step inside magnificent history with intricately carved sandstone arches, royal courtyard fountains, and gold murals.",
    image: [
      { url: "https://picsum.photos/id/1022/1200/800", filename: "Main_Heritage_Palace" },
      { url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80", filename: "Carved_Sandstone_Bed" },
      { url: "https://images.unsplash.com/photo-1620626011761-996317b6979a?auto=format&fit=crop&w=1200&q=80", filename: "Luxury_Marble_Bath" },
      { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/1022/1200/800", filename: "Royal_Courtyard" }
    ],
    price: 16000, location: "Jodhpur", country: "India", category: "Castles"
  },
  {
    title: "Chateau de Rose Fields",
    description: "An exquisite medieval French estate complete with massive brick towers, private vineyards, and classical art halls.",
    image: [
      { url: "https://picsum.photos/id/1016/1200/800", filename: "Main_Brick_Towers" },
      { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80", filename: "Classical_Art_Bedroom" },
      { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", filename: "Chateau_Bathroom" },
      { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/1016/1200/800", filename: "Rose_Vineyards" }
    ],
    price: 24000, location: "Bordeaux", country: "France", category: "Castles"
  },
  {
    title: "Highland Citadel Fortress",
    description: "Live inside a fully functional 16th-century iron fortress castle boasting heavy stone battlements and vintage shield vaults.",
    image: [
      { url: "https://picsum.photos/id/1043/1200/800", filename: "Main_Citadel_Wall" },
      { url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80", filename: "Fortress_Chamber_Bed" },
      { url: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80", filename: "Iron_Vault_Bathroom" },
      { url: "https://images.unsplash.com/photo-1 pockets/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/1043/1200/800", filename: "Stone_Battlements" }
    ],
    price: 19500, location: "Highlands", country: "Scotland", category: "Castles"
  },
  {
    title: "The Lake Palace Suite",
    description: "A gorgeous white marble structure floating beautifully in the center of pristine calm heritage lake basins.",
    image: [
      { url: "https://picsum.photos/id/1039/1200/800", filename: "Main_Floating_Palace" },
      { url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", filename: "White_Marble_Bed" },
      { url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80", filename: "Palace_Bathroom" },
      { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/1039/1200/800", filename: "Heritage_Lake_View" }
    ],
    price: 18500, location: "Udaipur", country: "India", category: "Castles"
  },

  // ==========================================
  // 6. AMAZING POOLS CATEGORY (10 Listings)
  // ==========================================
  {
    title: "Infinity Blue Luxury Villa",
    description: "Relax by the stunning private infinity pool overlooking the deep blue Mediterranean sea.",
    image: [
      { url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80", filename: "Main_Infinity_Pool" },
      { url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80", filename: "Poolside_Bedroom" },
      { url: "https://images.unsplash.com/photo-1620626011761-996317b6979a?auto=format&fit=crop&w=1200&q=80", filename: "Attached_Washroom" },
      { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80", filename: "Mediterranean_Sea" }
    ],
    price: 12000, location: "Santorini", country: "Greece", category: "Amazing Pools"
  },
  {
    title: "Balinese Jungle Drop Pool Villa",
    description: "A breathtaking tiered plunge pool hanging over wild tropical deep valley canopies.",
    image: [
      { url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80", filename: "Main_Jungle_Pool" },
      { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80", filename: "Bamboo_Canopy_Bed" },
      { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", filename: "Open_Air_Bathroom" },
      { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80", filename: "Tropical_Valley" }
    ],
    price: 8000, location: "Ubud", country: "Indonesia", category: "Amazing Pools"
  },
  {
    title: "The Cave Pool Sanctuary",
    description: "An exotic architectural stone house containing an indoor-outdoor glowing heated cave pool channel.",
    image: [
      { url: "https://thumbs.dreamstime.com/b/stunning-underground-cave-pool-crystal-clear-water-natural-rock-formations-ai-generated-stunning-underground-cave-pool-381979011.jpg", filename: "Main_Cave_Pool" },
      { url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80", filename: "Stone_Wall_Bedroom" },
      { url: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80", filename: "Heated_Bathroom" },
      { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://thumbs.dreamstime.com/b/stunning-underground-cave-pool-crystal-clear-water-natural-rock-formations-ai-generated-stunning-underground-cave-pool-381979011.jpg", filename: "Rock_Glow_Sanctuary" }
    ],
    price: 9500, location: "Mykonos", country: "Greece", category: "Amazing Pools"
  },
  {
    title: "Beachfront Paradise Oasis",
    description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate luxury lagoon pool.",
    image: [
      { url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80", filename: "Main_Lagoon_Pool" },
      { url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", filename: "Paradise_Suite_Bed" },
      { url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80", filename: "Lagoon_Bathroom" },
      { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80", filename: "Sandy_Beach stretch" }
    ],
    price: 2000, location: "Cancun", country: "Mexico", category: "Amazing Pools"
  },
  {
    title: "Tropical Villa in Phuket",
    description: "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: [
      { url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?auto=format&fit=crop&w=1200&q=80", filename: "Main_Infinity_Edge" },
      { url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80", filename: "Teakwood_Bedroom" },
      { url: "https://images.unsplash.com/photo-1620626011761-996317b6979a?auto=format&fit=crop&w=1200&q=80", filename: "Luxury_Bathroom" },
      { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?auto=format&fit=crop&w=1200&q=80", filename: "Phuket_Horizon" }
    ],
    price: 3000, location: "Phuket", country: "Thailand", category: "Amazing Pools"
  },
  {
    title: "Glass Bottom Desert Lagoon Oasis",
    description: "A striking sapphire turquoise pool oasis carved straight within golden desert rocks canyons.",
    image: [
      { url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=cover&w=1200", filename: "Main_Desert_Oasis" },
      { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80", filename: "Rock_Cut_Bedroom" },
      { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", filename: "Modern_Bathroom" },
      { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=cover&w=1200", filename: "Golden_Canyon_View" }
    ],
    price: 10500, location: "Dubai", country: "UAE", category: "Amazing Pools"
  },
  {
    title: "Azure Horizon Infinity Villa",
    description: "Features a dynamic 50-meter glass edge pool that blends perfectly into the crystal blue sea waves horizon line.",
    image: [
      { url: "https://picsum.photos/id/350/1200/800", filename: "Main_Glass_Pool" },
      { url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80", filename: "Azure_Suite_Bedroom" },
      { url: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80", filename: "Infinity_Bathroom" },
      { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/350/1200/800", filename: "Crystal_Sea_Horizon" }
    ],
    price: 14500, location: "Phuket", country: "Thailand", category: "Amazing Pools"
  },
  {
    title: "Cliffside Stone Plunge Resort",
    description: "Relax inside a multi-tier natural volcanic stone swimming lagoon hanging right over wild tropical jungle canopies.",
    image: [
      { url: "https://picsum.photos/id/326/1200/800", filename: "Main_Volcanic_Lagoon" },
      { url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", filename: "Jungle_Edge_Bedroom" },
      { url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80", filename: "Stone_Plunge_Bathroom" },
      { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/326/1200/800", filename: "Tropical_Canopy" }
    ],
    price: 9000, location: "Bali", country: "Indonesia", category: "Amazing Pools"
  },
  {
    title: "Emerald Desert Hot Oasis",
    description: "An architectural wonder containing a deep turquoise pool carved straight into majestic red canyons walls.",
    image: [
      { url: "https://picsum.photos/id/386/1200/800", filename: "Main_Turquoise_Pool" },
      { url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80", filename: "Canyon_Suite_Bed" },
      { url: "https://images.unsplash.com/photo-1620626011761-996317b6979a?auto=format&fit=crop&w=1200&q=80", filename: "Desert_Hot_Bathroom" },
      { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/386/1200/800", filename: "Red_Canyon_Walls" }
    ],
    price: 12000, location: "Sedona", country: "United States", category: "Amazing Pools"
  },
  {
    title: "The Underground Cave Lagoon",
    description: "Exotic luxury stone estate hosting a private illuminated naturally-heated swimming cave channel network.",
    image: [
      { url: "https://picsum.photos/id/444/1200/800", filename: "Main_Underground_Cave" },
      { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80", filename: "Cave_Suite_Bedroom" },
      { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", filename: "Naturally_Heated_Bath" },
      { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/444/1200/800", filename: "Illuminated_Cave_Network" }
    ],
    price: 15500, location: "Santorini", country: "Greece", category: "Amazing Pools"
  },

  // ==========================================
  // 7. CAMPING CATEGORY (10 Listings)
  // ==========================================
  {
    title: "Safari Wilderness Tents",
    description: "Luxury camping in the middle of the national park. Wake up to the sounds of nature and wildlife.",
    image: [
      { url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80", filename: "Main_Wilderness_Camp" },
      { url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80", filename: "Canvas_Luxury_Bed" },
      { url: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80", filename: "Outback_Bathroom" },
      { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80", filename: "National_Park_Fence" }
    ],
    price: 4500, location: "Ranthambore", country: "India", category: "Camping"
  },
  {
    title: "Safari Lodge in the Serengeti",
    description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: [
      { url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80", filename: "Main_Lodge_View" },
      { url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", filename: "Wilderness_Bedroom" },
      { url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80", filename: "Insulated_Bathroom" },
      { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80", filename: "Great_Migration_Deck" }
    ],
    price: 4000, location: "Serengeti National Park", country: "Tanzania", category: "Camping"
  },
  {
    title: "Stargazer Canvas Bell Tent",
    description: "Minimalist canvas camping site setup over high hills fields with private outdoor bonfire pit circles.",
    image: [
      { url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80", filename: "Main_Bell_Tent" },
      { url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80", filename: "Minimalist_Tent_Bed" },
      { url: "https://images.unsplash.com/photo-1620626011761-996317b6979a?auto=format&fit=crop&w=1200&q=80", filename: "Eco_Camp_Bathroom" },
      { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80", filename: "Bonfire_Pit_Circles" }
    ],
    price: 2500, location: "Wayanad", country: "India", category: "Camping"
  },
  {
    title: "Redwood Forest Tree Tents",
    description: "Suspended adventure tents hanging between massive wooden trunks for extreme nature lovers.",
    image: [
      { url: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80", filename: "Main_Suspended_Tents" },
      { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80", filename: "Treehouse_Hanging_Bed" },
      { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", filename: "Timber_Bathroom" },
      { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80", filename: "Redwood_Trunks_View" }
    ],
    price: 3800, location: "California", country: "United States", category: "Camping"
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Live among the treetops in this unique treehouse retreat. A true nature lover's camping paradise.",
    image: [
      { url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80", filename: "Main_Treehouse_Look" },
      { url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80", filename: "Treetop_Suite_Bed" },
      { url: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80", filename: "Compact_Camp_Bath" },
      { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80", filename: "Nature_Wild_Canopy" }
    ],
    price: 800, location: "Portland", country: "United States", category: "Camping"
  },
  {
    title: "Desert Luxury Glamping Pod",
    description: "High-end white canvas marquee tent containing rich rugs and traditional lantern installations.",
    image: [
      { url: "https://thumbs.dreamstime.com/b/luxury-desert-glamping-jordan-igloo-tents-sunset-landscape-warm-lighting-dome-resort-hotel-314012101.jpg", filename: "Main_Marquee_Tent" },
      { url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", filename: "Luxury_Desert_Bed" },
      { url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80", filename: "Outback_Bathroom" },
      { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://thumbs.dreamstime.com/b/luxury-desert-glamping-jordan-igloo-tents-sunset-landscape-warm-lighting-dome-resort-hotel-314012101.jpg", filename: "Jaisalmer_Sand_Dunes" }
    ],
    price: 5000, location: "Jaisalmer", country: "India", category: "Camping"
  },
  {
    title: "Wilderness Safari Marquee",
    description: "Premium heavy canvas glamping pavilions equipped with complete plush beds, rugs, and open tiger reserve fencing.",
    image: [
      { url: "https://picsum.photos/id/611/1200/800", filename: "Main_Safari_Marquee" },
      { url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80", filename: "Plush_Canvas_Bed" },
      { url: "https://images.unsplash.com/photo-1620626011761-996317b6979a?auto=format&fit=crop&w=1200&q=80", filename: "Private_Camp_Washroom" },
      { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/611/1200/800", filename: "Tiger_Reserve_Fencing" }
    ],
    price: 5500, location: "Ranthambore", country: "India", category: "Camping"
  },
  {
    title: "Starry Night Canvas Dome",
    description: "A minimalist outback bell tent camp site situated right over high green grassy meadow hills with private fire pits.",
    image: [
      { url: "https://picsum.photos/id/718/1200/800", filename: "Main_Outback_Dome" },
      { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80", filename: "Meadow_Camp_Bed" },
      { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", filename: "Attached_Camp_Bath" },
      { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/718/1200/800", filename: "Starry_Night_Sky" }
    ],
    price: 2200, location: "Coorg", country: "India", category: "Camping"
  },
  {
    title: "Deep Wood Suspended Treehouse",
    description: "An extreme adventure wooden structure treehouse camp setup hanging between towering pine tree bases.",
    image: [
      { url: "https://picsum.photos/id/835/1200/800", filename: "Main_Suspended_Treehouse" },
      { url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80", filename: "Towering_Pine_Bed" },
      { url: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80", filename: "Treehouse_Washroom" },
      { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/835/1200/800", filename: "Deep_Woods_View" }
    ],
    price: 3600, location: "Ooty", country: "India", category: "Camping"
  },
  {
    title: "Golden Sand Dunes Glamping",
    description: "High-end luxury desert camp marquees styled with authentic oil lamps, camel paths, and live folk music setups.",
    image: [
      { url: "https://picsum.photos/id/744/1200/800", filename: "Main_Desert_Marquees" },
      { url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", filename: "Luxury_Camp_Suite_Bed" },
      { url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80", filename: "Traditional_Camp_Bath" },
      { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/744/1200/800", filename: "Folk_Music_Setups" }
    ],
    price: 4800, location: "Jaisalmer", country: "India", category: "Camping"
  },

  // ==========================================
  // 8. FARMS CATEGORY (9 Listings)
  // ==========================================
  {
    title: "Organic Cottage & Farmstay",
    description: "Spend time feeding horses and picking fresh apples in this massive countryside organic farm.",
    image: [
      { url: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=cover&w=1200", filename: "Main_Farmhouse" },
      { url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80", filename: "Countryside_Bedroom" },
      { url: "https://images.unsplash.com/photo-1620626011761-996317b6979a?auto=format&fit=crop&w=1200&q=80", filename: "Rustic_Bathroom" },
      { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=cover&w=1200", filename: "Apple_Orchards" }
    ],
    price: 3200, location: "Punjab", country: "India", category: "Farms"
  },
  {
    title: "Tuscan Stone Farmhouse",
    description: "An old-world brick farm property lined with cypress trees and private green olive fields.",
    image: [
      { url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=cover&w=1200", filename: "Main_Stone_Farm" },
      { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80", filename: "Tuscan_Style_Bed" },
      { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", filename: "Brick_Bathroom" },
      { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=cover&w=1200", filename: "Green_Olive_Fields" }
    ],
    price: 6500, location: "Tuscany", country: "Italy", category: "Farms"
  },
  {
    title: "Green Tea Plantation Estate",
    description: "Historic wood bungalow inside sprawling terraced fields of high-grade emerald green tea.",
    image: [
      { url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-4.0.3&auto=format&fit=cover&w=1200", filename: "Main_Wood_Bungalow" },
      { url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80", filename: "Tea_Estate_Bed" },
      { url: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80", filename: "Classic_Bathroom" },
      { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-4.0.3&auto=format&fit=cover&w=1200", filename: "Emerald_Tea_Bushes" }
    ],
    price: 4500, location: "Ooty", country: "India", category: "Farms"
  },
  {
    title: "Windmill Barn Meadow Stay",
    description: "Quaint rustic red barn farm house sitting right under a fully operational dynamic vintage windmill.",
    image: [
      { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=cover&w=1200", filename: "Main_Windmill_Barn" },
      { url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", filename: "Red_Barn_Bedroom" },
      { url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80", filename: "Modern_Bathroom" },
      { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=cover&w=1200", filename: "Vintage_Windmill_Tower" }
    ],
    price: 5500, location: "Amsterdam", country: "Netherlands", category: "Farms"
  },
  {
    title: "Charming Cottage in Cotswolds",
    description: "Escape to the picturesque Cotswolds in this quaint country cottage farm with a thatched roof.",
    image: [
      { url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&auto=format&fit=cover&w=1200", filename: "Main_Quaint_Cottage" },
      { url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80", filename: "Thatched_Roof_Bed" },
      { url: "https://images.unsplash.com/photo-1620626011761-996317b6979a?auto=format&fit=crop&w=1200&q=80", filename: "Vintage_Bathroom" },
      { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&auto=format&fit=cover&w=1200", filename: "Picturesque_Cotswolds" }
    ],
    price: 1200, location: "Cotswolds", country: "United Kingdom", category: "Farms"
  },
  {
    title: "The Mustard Country Barn",
    description: "Spend time breathing clean air, driving tractors, and eating fresh food within this sprawling family-run farmstead.",
    image: [
      { url: "https://picsum.photos/id/1044/1200/800", filename: "Main_Mustard_Barn" },
      { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80", filename: "Farmstead_Bed" },
      { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", filename: "Attached_Washroom" },
      { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/1044/1200/800", filename: "Sprawling_Meadows" }
    ],
    price: 2800, location: "Amritsar", country: "India", category: "Farms"
  },
  {
    title: "Cypress Vineyard Estate",
    description: "A classic stone brick Italian farmhouse wrapped in vast rows of organic sweet grape and olive vegetation fields.",
    image: [
      { url: "https://picsum.photos/id/1026/1200/800", filename: "Main_Stone_Farmhouse" },
      { url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80", filename: "Italian_Luxury_Bed" },
      { url: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80", filename: "Stone_Brick_Bathroom" },
      { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/1026/1200/800", filename: "Sweet_Grape_Rows" }
    ],
    price: 7500, location: "Tuscany", country: "Italy", category: "Farms"
  },
  {
    title: "Terraced Tea Plantation Bungalow",
    description: "A stunning 100-year-old wooden colonial bungalow sitting right inside active rolling green tea bushes fields.",
    image: [
      { url: "https://picsum.photos/id/1081/1200/800", filename: "Main_Colonial_Bungalow" },
      { url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", filename: "100_Year_Old_Bed" },
      { url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80", filename: "Classic_Bathroom" },
      { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/1081/1200/800", filename: "Rolling_Green_Tea" }
    ],
    price: 4500, location: "Munnar", country: "India", category: "Farms"
  },
  {
    title: "The Windmill Meadow Dairy",
    description: "Quaint rustic wooden farmhouse located inside active grazing cattle fields with a historic windmill tower axis.",
    image: [
      { url: "https://picsum.photos/id/1070/1200/800", filename: "Main_Wooden_Farm" },
      { url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80", filename: "Rustic_Farm_Bed" },
      { url: "https://images.unsplash.com/photo-1620626011761-996317b6979a?auto=format&fit=crop&w=1200&q=80", filename: "Attached_Bathroom" },
      { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/1070/1200/800", filename: "Windmill_Tower_Axis" }
    ],
    price: 5800, location: "Rotterdam", country: "Netherlands", category: "Farms"
  },

  // ==========================================
  // 9. ARCTIC CATEGORY (9 Listings)
  // ==========================================
  {
    title: "Glass Igloo Under Northern Lights",
    description: "Watch the magical Aurora Borealis right from the comfort of your warm luxury glass dome.",
    image: [
      { url: "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-4.0.3&auto=format&fit=cover&w=1200", filename: "Main_Glass_Igloo" },
      { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80", filename: "Aurora_View_Bed" },
      { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", filename: "Thermal_Bathroom" },
      { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-4.0.3&auto=format&fit=cover&w=1200", filename: "Northern_Lights" }
    ],
    price: 18000, location: "Lapland", country: "Finland", category: "Arctic"
  },
  {
    title: "Fjord Edge Ice Cabin",
    description: "A sharp minimalist black cabin hanging over massive freezing deep blue arctic water channels.",
    image: [
      { url: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&auto=format&fit=cover&w=1200", filename: "Main_Black_Cabin" },
      { url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80", filename: "Insulated_Polar_Bed" },
      { url: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80", filename: "Heated_Bathroom" },
      { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&auto=format&fit=cover&w=1200", filename: "Freezing_Fjord_Water" }
    ],
    price: 14500, location: "Tromso", country: "Norway", category: "Arctic"
  },
  {
    title: "Snowdrift Thermal Lodge",
    description: "Log cabin fully buried in deep snow, boasting outdoor sulfur geyser thermal hot springs tubes.",
    image: [
      { url: "https://images.unsplash.com/photo-1483168527879-c66136b56105?ixlib=rb-4.0.3&auto=format&fit=cover&w=1200", filename: "Main_Buried_Cabin" },
      { url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", filename: "Cozy_Timber_Bed" },
      { url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80", filename: "Sulfur_Hot_Bath" },
      { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1483168527879-c66136b56105?ixlib=rb-4.0.3&auto=format&fit=cover&w=1200", filename: "Thermal_Hot_Springs" }
    ],
    price: 16000, location: "Reykjavik", country: "Iceland", category: "Arctic"
  },
  {
    title: "Glacier Ridge Lookout Station",
    description: "High-altitude polar station insulated with wood panels, looking over massive cracking blue ice shelf matrix.",
    image: [
      { url: "https://images.unsplash.com/photo-1548777123-e216912df7d8?ixlib=rb-4.0.3&auto=format&fit=cover&w=1200", filename: "Main_Polar_Station" },
      { url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80", filename: "Insulated_Bed_Area" },
      { url: "https://images.unsplash.com/photo-1620626011761-996317b6979a?auto=format&fit=crop&w=1200&q=80", filename: "Heated_Bathroom" },
      { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1548777123-e216912df7d8?ixlib=rb-4.0.3&auto=format&fit=cover&w=1200", filename: "Cracking_Ice_Shelf" }
    ],
    price: 21000, location: "Svalbard", country: "Norway", category: "Arctic"
  },
  {
    title: "Ski-In/Ski-Out Alp Chalet",
    description: "Hit the slopes right from your doorstep in this winter ice-chalet in the Swiss Alps.",
    image: [
      { url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&auto=format&fit=cover&w=1200", filename: "Main_Winter_Chalet" },
      { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80", filename: "Alp_Slopes_Bedroom" },
      { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", filename: "Attached_Bathroom" },
      { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&auto=format&fit=cover&w=1200", filename: "Ski_Slope_Doorstep" }
    ],
    price: 3000, location: "Verbier", country: "Switzerland", category: "Arctic"
  },
  {
    title: "Thermal Aurora Glass Shell",
    description: "Lie down on premium furs inside a fully temperature-controlled transparent shell dome looking at the green Northern Lights.",
    image: [
      { url: "https://picsum.photos/id/1080/1200/800", filename: "Main_Transparent_Dome" },
      { url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80", filename: "Premium_Furs_Bed" },
      { url: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80", filename: "Glass_Dome_Bathroom" },
      { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/1080/1200/800", filename: "Green_Aurora_Borealis" }
    ],
    price: 19000, location: "Rovaniemi", country: "Finland", category: "Arctic"
  },
  {
    title: "Blackwood Polar Fjord Hut",
    description: "A striking architectural minimalist black cabin mounted securely over freezing arctic volcanic oceanic currents.",
    image: [
      { url: "https://picsum.photos/id/903/1200/800", filename: "Main_Minimalist_Cabin" },
      { url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", filename: "Fjord_Edge_Bedroom" },
      { url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80", filename: "Modern_Bathroom" },
      { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/903/1200/800", filename: "Volcanic_Ocean_Currents" }
    ],
    price: 15000, location: "Lofoten", country: "Norway", category: "Arctic"
  },
  {
    title: "Glacier Base Deep Lodge",
    description: "A log cabin insulated with heavy animal wool setups, boasting private natural sulfuric geothermal hot tub geysers.",
    image: [
      { url: "https://picsum.photos/id/881/1200/800", filename: "Main_Glacier_Lodge" },
      { url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80", filename: "Heavy_Wool_Bedroom" },
      { url: "https://images.unsplash.com/photo-1620626011761-996317b6979a?auto=format&fit=crop&w=1200&q=80", filename: "Sulfuric_Hot_Bathroom" },
      { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/881/1200/800", filename: "Geothermal_Hot_Geysers" }
    ],
    price: 16500, location: "Akureyri", country: "Iceland", category: "Arctic"
  },
  {
    title: "Ice Shelf Research Station Hut",
    description: "An extreme weather premium polar station looking directly over cracking blue tidewater glacier ice matrices.",
    image: [
      { url: "https://picsum.photos/id/962/1200/800", filename: "Main_Research_Station" },
      { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80", filename: "Polar_Station_Bed" },
      { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", filename: "Heated_Bathroom" },
      { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/962/1200/800", filename: "Tidewater_Glacier_Ice" }
    ],
    price: 22000, location: "Longyearbyen", country: "Norway", category: "Arctic"
  },

  // ==========================================
  // 10. DOMES CATEGORY (9 Listings)
  // ==========================================
  {
    title: "The Mirror Dome Pavillion",
    description: "Reflective chrome polished dome shell that completely blends invisible with surrounding alpine trees.",
    image: [
      { url: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80", filename: "Main_Mirror_Dome" },
      { url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80", filename: "Insulated_Chrome_Bed" },
      { url: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80", filename: "Modern_Bathroom" },
      { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80", filename: "Alpine_Trees_Reflections" }
    ],
    price: 11500, location: "Whistler", country: "Canada", category: "Domes"
  },
  {
    title: "Eco-Dome Mountain Hideout",
    description: "A unique dome structure perched high up on a cliff. Perfect stargazing experience at night.",
    image: [
      { url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=cover&w=1200", filename: "Main_Cliff_Dome" },
      { url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", filename: "Cozy_Dome_Bed" },
      { url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80", filename: "Eco_Bathroom" },
      { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=cover&w=1200", filename: "Night_Stargazing_View" }
    ],
    price: 5500, location: "Kasauli", country: "India", category: "Domes"
  },
  {
    title: "Futuristic Jungle Biosphere",
    description: "A vast transparent shell geometric dome built right into dense tropical giant forest floors.",
    image: [
      { url: "https://img.freepik.com/premium-photo/future-jungle-dwellings-ingenious-survival-architecture-futuristic-urban-oasis-blending-nature_969707-6542.jpg?w=2000", filename: "Main_Biosphere_Shell" },
      { url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80", filename: "Tropical_Forest_Bed" },
      { url: "https://images.unsplash.com/photo-1620626011761-996317b6979a?auto=format&fit=crop&w=1200&q=80", filename: "Attached_Washroom" },
      { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://img.freepik.com/premium-photo/future-jungle-dwellings-ingenious-survival-architecture-futuristic-urban-oasis-blending-nature_969707-6542.jpg?w=2000", filename: "Jungle_Forest_Floor" }
    ],
    price: 7000, location: "Bali", country: "Indonesia", category: "Domes"
  },
  {
    title: "Mars Desert Geodesic Pod",
    description: "Live on another planet inside this red alien sand canyon sphere dome with space deck views.",
    image: [
      { url: "https://sharpmagazine.com/wp-content/uploads/2017/04/17951809_1290694504353388_3221452462928177428_n.jpg", filename: "Main_Geodesic_Pod" },
      { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80", filename: "Space_Pod_Bed" },
      { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", filename: "Pod_Bathroom" },
      { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://sharpmagazine.com/wp-content/uploads/2017/04/17951809_1290694504353388_3221452462928177428_n.jpg", filename: "Red_Sand_Canyon" }
    ],
    price: 9000, location: "Wadi Rum", country: "Jordan", category: "Domes"
  },
  {
    title: "Historic Brownstone Dome",
    description: "Insulated modern geodesic glass dome structure located near historic Boston fields.",
    image: [
      { url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&auto=format&fit=cover&w=1200", filename: "Main_Glass_Dome" },
      { url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80", filename: "Dome_Bedroom" },
      { url: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80", filename: "Insulated_Bathroom" },
      { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&auto=format&fit=cover&w=1200", filename: "Historic_Boston_Fields" }
    ],
    price: 2200, location: "Boston", country: "United States", category: "Domes"
  },
  {
    title: "Geodesic Eco Mountain Pod",
    description: "A panoramic hexagonal dome pod standing on a structural timber deck. Excellent open-sky night stargazing view.",
    image: [
      { url: "https://picsum.photos/id/742/1200/800", filename: "Main_Hexagonal_Dome" },
      { url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", filename: "Timber_Deck_Bed" },
      { url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80", filename: "Modern_Bathroom" },
      { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/742/1200/800", filename: "Stargazing_Sky_View" }
    ],
    price: 5200, location: "Manali", country: "India", category: "Domes"
  },
  {
    title: "Tropical Biosphere Glass Dome",
    description: "A vast reinforced aluminum geometric dome bubble built right inside dense green rainforest canopy locations.",
    image: [
      { url: "https://picsum.photos/id/815/1200/800", filename: "Main_Geometric_Bubble" },
      { url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80", filename: "Rainforest_Canopy_Bed" },
      { url: "https://images.unsplash.com/photo-1620626011761-996317b6979a?auto=format&fit=crop&w=1200&q=80", filename: "Attached_Camp_Washroom" },
      { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/815/1200/800", filename: "Reinforced_Aluminum_Shell" }
    ],
    price: 7500, location: "Ubud", country: "Indonesia", category: "Domes"
  },
  {
    title: "Canyon Mars Habitat Capsule",
    description: "Live inside a futuristic space capsule design pod settled right within empty orange sand desert rock valleys.",
    image: [
      { url: "https://picsum.photos/id/926/1200/800", filename: "Main_Space_Capsule" },
      { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80", filename: "Futuristic_Habitat_Bed" },
      { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", filename: "Capsule_Bathroom" },
      { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/926/1200/800", filename: "Desert_Rock_Valleys" }
    ],
    price: 8500, location: "Petra", country: "Jordan", category: "Domes"
  },
  {
    title: "Chrome Mirror Invisibility Sphere",
    description: "A masterfully engineered mirror dome pavilion reflecting 100% surrounding green forests trees and snow.",
    image: [
      { url: "https://picsum.photos/id/974/1200/800", filename: "Main_Invisibility_Sphere" },
      { url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80", filename: "Chrome_Dome_Bedroom" },
      { url: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80", filename: "Mirror_Bathroom" },
      { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/974/1200/800", filename: "Surrounding_Green_Forest" }
    ],
    price: 12000, location: "Vancouver", country: "Canada", category: "Domes"
  },

  // ==========================================
  // 11. BOATS CATEGORY (10 Listings)
  // ==========================================
  {
    title: "Category Houseboat",
    description: "Cruise around the serene backwaters of Kerala in this fully equipped premium traditional wooden boat.",
    image: [
      { url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80", filename: "Main_Boat_Look" },
      { url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", filename: "Cabin_Suite_Bed" },
      { url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80", filename: "Compact_Boat_Bath" },
      { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80", filename: "Serene_Backwaters" }
    ],
    price: 8500, location: "Alleppey", country: "India", category: "Boats"
  },
  {
    title: "Sleek Mediterranean Yacht",
    description: "A glorious white luxury high-speed motor yacht complete with three decks and tanning leather beds.",
    image: [
      { url: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1200&q=80", filename: "Main_Yacht_Deck" },
      { url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80", filename: "Master_Cabin_Bed" },
      { url: "https://images.unsplash.com/photo-1620626011761-996317b6979a?auto=format&fit=crop&w=1200&q=80", filename: "Luxury_Yacht_Bath" },
      { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1200&q=80", filename: "Tanning_Leather_Beds" }
    ],
    price: 25000, location: "Monaco", country: "France", category: "Boats"
  },
  {
    title: "Traditional Wooden Catamaran",
    description: "Sail over emerald blue waters inside this beautiful twin-hull boat deck with net hammocks.",
    image: [
      { url: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80", filename: "Main_Catamaran" },
      { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80", filename: "Twin_Hull_Bed" },
      { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", filename: "Marine_Bathroom" },
      { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80", filename: "Emerald_Blue_Waters" }
    ],
    price: 12000, location: "Phuket", country: "Thailand", category: "Boats"
  },
  {
    title: "Modern Floating Glass Villa House",
    description: "A static heavy architectural glass apartment built over water floats, docked near premium harbor points.",
    image: [
      { url: "https://ecolux.homes/wp-content/uploads/2024/03/Floating-90.jpg", filename: "Main_Floating_Villa" },
      { url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80", filename: "Water_Reflecting_Bed" },
      { url: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80", filename: "Glass_Villa_Bathroom" },
      { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://ecolux.homes/wp-content/uploads/2024/03/Floating-90.jpg", filename: "Premium_Harbor_Points" }
    ],
    price: 14000, location: "Srinagar", country: "India", category: "Boats"
  },
  {
    title: "Private Island Cruise Link",
    description: "Have an entire luxury transport dock layout to yourself for an unforgettable vacation experience.",
    image: [
      { url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&w=1200&q=80", filename: "Main_Cruise_Dock" },
      { url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", filename: "Ocean_Suite_Bed" },
      { url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80", filename: "Attached_Washroom" },
      { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&w=1200&q=80", filename: "Private_Island_Coast" }
    ],
    price: 10000, location: "Fiji", country: "Fiji", category: "Boats"
  },
  {
    title: "Kettuvallam Heritage Floating Houseboat",
    description: "Cruise lazily around the coconut-shaded calm backwaters within this massive traditional fully furnished wooden hull boat.",
    image: [
      { url: "https://picsum.photos/id/211/1200/800", filename: "Main_Wooden_Hull" },
      { url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80", filename: "Traditional_Boat_Bed" },
      { url: "https://images.unsplash.com/photo-1620626011761-996317b6979a?auto=format&fit=crop&w=1200&q=80", filename: "Compact_Washroom" },
      { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/211/1200/800", filename: "Coconut_Shaded_Backwaters" }
    ],
    price: 7800, location: "Kumarakom", country: "India", category: "Boats"
  },
  {
    title: "Mega Tri-Deck Ocean Yacht",
    description: "Ultimate high-speed commercial grade white motor yacht containing dual living lounges and leather tanning deck platforms.",
    image: [
      { url: "https://picsum.photos/id/274/1200/800", filename: "Main_Tri_Deck" },
      { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80", filename: "VIP_Cabin_Bed" },
      { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", filename: "Premium_Yacht_Bath" },
      { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/274/1200/800", filename: "Leather_Tanning_Platforms" }
    ],
    price: 27000, location: "Saint-Tropez", country: "France", category: "Boats"
  },
  {
    title: "Twin-Hull Luxury Catamaran Deck",
    description: "Sail over emerald coastal shallow keys in this beautiful modern boat fitted with marine net beds overlays.",
    image: [
      { url: "https://picsum.photos/id/364/1200/800", filename: "Main_Catamaran_Deck" },
      { url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80", filename: "Ocean_Facing_Bed" },
      { url: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80", filename: "Marine_Washroom" },
      { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/364/1200/800", filename: "Marine_Net_Beds" }
    ],
    price: 13000, location: "Maldives", country: "Maldives", category: "Boats"
  },
  {
    title: "Static Floating Glass Villa House",
    description: "An architectural lake flat anchored over steel pontoon water floats near scenic willow trees bank points.",
    image: [
      { url: "https://picsum.photos/id/389/1200/800", filename: "Main_Lake_Flat" },
      { url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", filename: "Waterfront_Bed" },
      { url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80", filename: "Pontoon_Bathroom" },
      { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", filename: "Drawing_Room" },
      { url: "https://picsum.photos/id/389/1200/800", filename: "Scenic_Willow_Trees" }
    ],
    price: 11000, location: "Srinagar", country: "India", category: "Boats"
  }
];

module.exports = { data: sampleListings };