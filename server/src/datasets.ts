// Define Types
export type User = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    phone: string;
  };
  
  type Flight = {
    id?: number;
    airline: string;
    price: number;
    class: string;
    origin: string;
    destination: string;
    departuredate: Date; 
    departuretime: number;
    arrivaltime: number;
    slots: number;
  };
  
  type Transport = {
    id?: number;
    mode: string;
    company: string;
    price: number; 
    origin: string;
    destination: string;
    slots: number;
  };
  
  type Hotel = {
    id?: number;
    name: string;
    class: string;
    price: number;
    slots: number;
    beds: number;
    city: string; 
  };
  
  type Destination = {
    id?: string;
    name: string;
    images: string[];
    country: string;
    city: string;
    continent: string;
    description: string;
    price: number;
    duration: number;
    highlights: string[];
    text: string[];
  };
  
  type Review = {
    id?: string;
    userId: number;
    destination: string;
    rating: number;
    comment: string;
    destinationid: string;
  };
 
  /*export const users: User[] = [
      { firstname: "John", lastname: "Doe", email: "john.doe@example.com", password: "password123", phone: "1234567890" },
      { firstname: "Jane", lastname: "Smith", email: "jane.smith@example.com", password: "securepass", phone: "2345678901" },
      { firstname: "Alice", lastname: "Johnson", email: "alice.johnson@example.com", password: "passAlice", phone: "3456789012" },
      { firstname: "Bob", lastname: "Brown", email: "bob.brown@example.com", password: "bobsecure", phone: "4567890123" },
      { firstname: "Charlie", lastname: "Davis", email: "charlie.davis@example.com", password: "charliepass", phone: "5678901234" },
      { firstname: "David", lastname: "Miller", email: "david.miller@example.com", password: "davidpass", phone: "6789012345" },
      { firstname: "Eve", lastname: "Wilson", email: "eve.wilson@example.com", password: "evepassword", phone: "7890123456" },
      { firstname: "Frank", lastname: "Moore", email: "frank.moore@example.com", password: "frankpass", phone: "8901234567" },
      { firstname: "Grace", lastname: "Taylor", email: "grace.taylor@example.com", password: "gracepass", phone: "9012345678" },
      { firstname: "Hank", lastname: "Anderson", email: "hank.anderson@example.com", password: "hankpass", phone: "9123456789" },
      { firstname: "Ivy", lastname: "Thomas", email: "ivy.thomas@example.com", password: "ivypass", phone: "9234567890" },
      { firstname: "Jack", lastname: "Harris", email: "jack.harris@example.com", password: "jackpass", phone: "9345678901" },
      { firstname: "Kelly", lastname: "White", email: "kelly.white@example.com", password: "kellypass", phone: "9456789012" },
      { firstname: "Leo", lastname: "Martin", email: "leo.martin@example.com", password: "leopass", phone: "9567890123" },
      { firstname: "Mia", lastname: "Clark", email: "mia.clark@example.com", password: "miapass", phone: "9678901234" }
  ];*/
  export const flights: Flight[] = [
    { airline: "Airways A", price: 299.99, class: "Economy", origin: "New York", destination: "Paris", departuredate: new Date("2024-04-20T14:00:00Z"), departuretime: 1400, arrivaltime: 2200, slots: 50 },
    { airline: "SkyJet", price: 310.50, class: "Business", origin: "Los Angeles", destination: "Paris", departuredate: new Date("2024-04-22T16:00:00Z"), departuretime: 1600, arrivaltime: 400, slots: 35 },
    { airline: "Cloud Airlines", price: 280.00, class: "Economy", origin: "Toronto", destination: "Paris", departuredate: new Date("2024-04-23T09:00:00Z"), departuretime: 900, arrivaltime: 2100, slots: 40 },
  
    { airline: "Airways B", price: 499.99, class: "Business", origin: "Los Angeles", destination: "Dubai", departuredate: new Date("2024-04-21T16:00:00Z"), departuretime: 1600, arrivaltime: 600, slots: 30 },
    { airline: "Emirates", price: 520.00, class: "First", origin: "London", destination: "Dubai", departuredate: new Date("2024-04-24T17:00:00Z"), departuretime: 1700, arrivaltime: 300, slots: 20 },
    { airline: "FlyAway", price: 450.99, class: "Economy", origin: "Tokyo", destination: "Dubai", departuredate: new Date("2024-04-25T12:00:00Z"), departuretime: 1200, arrivaltime: 2300, slots: 25 },
  
    { airline: "SkyJet", price: 399.99, class: "Economy", origin: "Paris", destination: "Tokyo", departuredate: new Date("2024-04-22T12:00:00Z"), departuretime: 1200, arrivaltime: 2000, slots: 40 },
    { airline: "Japan Airlines", price: 420.00, class: "Business", origin: "New York", destination: "Tokyo", departuredate: new Date("2024-04-27T22:00:00Z"), departuretime: 2200, arrivaltime: 600, slots: 30 },
    { airline: "Cloud Airlines", price: 380.00, class: "Economy", origin: "Berlin", destination: "Tokyo", departuredate: new Date("2024-04-29T14:00:00Z"), departuretime: 1400, arrivaltime: 2300, slots: 45 },
  
    { airline: "Cloud Airlines", price: 299.99, class: "Economy", origin: "Berlin", destination: "Rome", departuredate: new Date("2024-04-23T18:00:00Z"), departuretime: 1800, arrivaltime: 600, slots: 45 },
    { airline: "FastFlight", price: 330.00, class: "Economy", origin: "Madrid", destination: "Rome", departuredate: new Date("2024-04-26T10:00:00Z"), departuretime: 1000, arrivaltime: 1500, slots: 40 },
    { airline: "JetGo", price: 310.50, class: "Business", origin: "London", destination: "Rome", departuredate: new Date("2024-04-28T13:00:00Z"), departuretime: 1300, arrivaltime: 1700, slots: 35 },
  
    { airline: "FastFlight", price: 549.99, class: "First", origin: "San Francisco", destination: "Cape Town", departuredate: new Date("2024-04-24T23:00:00Z"), departuretime: 2300, arrivaltime: 1100, slots: 20 },
    { airline: "Blue Skies", price: 570.00, class: "Business", origin: "New York", destination: "Cape Town", departuredate: new Date("2024-04-27T19:00:00Z"), departuretime: 1900, arrivaltime: 900, slots: 30 },
  
    { airline: "Air Elite", price: 450.99, class: "Business", origin: "Toronto", destination: "Sydney", departuredate: new Date("2024-04-25T17:00:00Z"), departuretime: 1700, arrivaltime: 300, slots: 25 },
    { airline: "Qantas", price: 480.00, class: "Economy", origin: "Los Angeles", destination: "Sydney", departuredate: new Date("2024-04-28T20:00:00Z"), departuretime: 2000, arrivaltime: 700, slots: 40 },
  
    { airline: "Eagle Air", price: 320.00, class: "Economy", origin: "Madrid", destination: "cusco", departuredate: new Date("2024-04-27T09:00:00Z"), departuretime: 900, arrivaltime: 1100, slots: 60 },
    { airline: "JetGo", price: 350.50, class: "Economy", origin: "Miami", destination: "cusco", departuredate: new Date("2024-04-29T08:00:00Z"), departuretime: 800, arrivaltime: 1000, slots: 40 },
  
    { airline: "JetGo", price: 500.99, class: "Business", origin: "Boston", destination: "Bali", departuredate: new Date("2024-04-28T22:00:00Z"), departuretime: 2200, arrivaltime: 700, slots: 25 },
    { airline: "FlyAway", price: 480.00, class: "Economy", origin: "Singapore", destination: "Bali", departuredate: new Date("2024-04-30T13:00:00Z"), departuretime: 1300, arrivaltime: 1600, slots: 50 },
    { airline: "FlyAway", price: 270.99, class: "Economy", origin: "Hong Kong", destination: "Santorini", departuredate: new Date("2024-04-29T11:00:00Z"), departuretime: 1100, arrivaltime: 1400, slots: 55 },
    { airline: "Aegean Airlines", price: 290.00, class: "Economy", origin: "Athens", destination: "Santorini", departuredate: new Date("2024-05-01T09:00:00Z"), departuretime: 900, arrivaltime: 1030, slots: 40 },
    { airline: "FlyAway", price: 270.99, class: "Economy", origin: "Hong Kong", destination: "New York", departuredate: new Date("2024-04-29T11:00:00Z"), departuretime: 1100, arrivaltime: 1400, slots: 55 },
    { airline: "Aegean Airlines", price: 290.00, class: "Economy", origin: "Athens", destination: "New York", departuredate: new Date("2024-05-01T09:00:00Z"), departuretime: 900, arrivaltime: 1030, slots: 40 }
  
    
  ];
  
  
  export const transports: Transport[] = [
    { mode: "Bus", company: "CityTransit", price: 10.99, origin: "Paris", destination: "Versailles", slots: 50 }, // Short bus ride from Paris
    { mode: "Train", company: "Railway Express", price: 25.50, origin: "Dubai", destination: "Abu Dhabi", slots: 100 }, // Nearby city with famous attractions
    { mode: "Car Rental", company: "Rent-a-Car", price: 45.00, origin: "Tokyo", destination: "Hakone", slots: 20 }, // Scenic hot spring destination near Tokyo
    { mode: "Ferry", company: "Sea Link", price: 30.00, origin: "Rome", destination: "Capri", slots: 70 }, // Famous island off Italy’s coast
    { mode: "Bus", company: "QuickBus", price: 15.99, origin: "Cape Town", destination: "Stellenbosch", slots: 40 }, // Wine region near Cape Town
    { mode: "Train", company: "Speed Rail", price: 40.00, origin: "Sydney", destination: "Blue Mountains", slots: 80 }, // Popular nature retreat near Sydney
    { mode: "Car Rental", company: "GoDrive", price: 55.00, origin: "New York", destination: "Niagara Falls", slots: 10 }, // Iconic natural wonder near NYC
    { mode: "Bus", company: "FastTrack", price: 12.50, origin: "Cusco", destination: "Machu Picchu", slots: 60 }, // Closest city to Machu Picchu
    { mode: "Ferry", company: "Ocean Liner", price: 50.00, origin: "Bali", destination: "Gili Islands", slots: 30 }, // Beach paradise accessible by ferry
    { mode: "Train", company: "EuroRail", price: 65.00, origin: "Santorini", destination: "Athens", slots: 90 } // Logical connection in Greece
  ];
  export const hotels: Hotel[] = [
    // Paris
    { name: "Grand Hotel", class: "5-Star", price: 200, slots: 50, beds: 1, city: "Paris" },
    { name: "Eiffel View Suites", class: "4-Star", price: 180, slots: 40, beds: 2, city: "Paris" },
    { name: "Louvre Inn", class: "3-Star", price: 130, slots: 30, beds: 3, city: "Paris" },
  
    // Dubai
    { name: "Ocean View", class: "4-Star", price: 150, slots: 30, beds: 2, city: "Dubai" },
    { name: "Burj Grand", class: "5-Star", price: 300, slots: 20, beds: 1, city: "Dubai" },
    { name: "Desert Lodge", class: "3-Star", price: 120, slots: 25, beds: 3, city: "Dubai" },
  
    // Tokyo
    { name: "Mountain Lodge", class: "3-Star", price: 100, slots: 20, beds: 2, city: "Tokyo" },
    { name: "Shinjuku Stay", class: "4-Star", price: 170, slots: 30, beds: 1, city: "Tokyo" },
    { name: "Cherry Blossom Hotel", class: "5-Star", price: 250, slots: 15, beds: 2, city: "Tokyo" },
  
    // Rome
    { name: "City Inn", class: "4-Star", price: 120, slots: 40, beds: 3, city: "Rome" },
    { name: "Colosseum Luxury", class: "5-Star", price: 280, slots: 25, beds: 1, city: "Rome" },
    { name: "Vatican Suites", class: "3-Star", price: 110, slots: 35, beds: 2, city: "Rome" },
  
    // Cape Town
    { name: "Skyline Suites", class: "5-Star", price: 250, slots: 35, beds: 1, city: "Cape Town" },
    { name: "Table Mountain Lodge", class: "4-Star", price: 180, slots: 30, beds: 2, city: "Cape Town" },
    { name: "Harbor View", class: "3-Star", price: 140, slots: 25, beds: 3, city: "Cape Town" },
  
    // Sydney
    { name: "Sunset Resort", class: "5-Star", price: 180, slots: 25, beds: 1, city: "Sydney" },
    { name: "Harbor Bridge Inn", class: "4-Star", price: 160, slots: 35, beds: 2, city: "Sydney" },
    { name: "Bondi Beach Stay", class: "3-Star", price: 120, slots: 20, beds: 3, city: "Sydney" },
  
    // New York
    { name: "Budget Stay", class: "2-Star", price: 80, slots: 15, beds: 3, city: "New York" },
    { name: "Times Square Suites", class: "5-Star", price: 320, slots: 20, beds: 1, city: "New York" },
    { name: "Central Park Hotel", class: "4-Star", price: 200, slots: 25, beds: 2, city: "New York" },
  
    // Machu Picchu
    { name: "Royal Palace", class: "5-Star", price: 300, slots: 20, beds: 1, city: "Cusco" },
    { name: "Inca Trail Lodge", class: "4-Star", price: 220, slots: 25, beds: 2, city: "Cusco" },
    { name: "Highland Stay", class: "3-Star", price: 150, slots: 30, beds: 3, city: "Cusco" },
  
    // Bali
    { name: "Lakeside Retreat", class: "4-Star", price: 140, slots: 30, beds: 2, city: "Bali" },
    { name: "Tropical Paradise", class: "5-Star", price: 280, slots: 25, beds: 1, city: "Bali" },
    { name: "Jungle View Resort", class: "3-Star", price: 110, slots: 20, beds: 3, city: "Bali" },
  
    // Santorini
    { name: "Winter Lodge", class: "3-Star", price: 110, slots: 25, beds: 2, city: "Santorini" },
    { name: "Blue Dome Suites", class: "5-Star", price: 320, slots: 20, beds: 1, city: "Santorini" },
    { name: "Cliffside Retreat", class: "4-Star", price: 200, slots: 30, beds: 2, city: "Santorini" }
  ];
   
  export const destinations: Destination[] = [
    {
      name: "Santorini",
      images: ["santorini1.jpg", "santorini2.jpg"],
      country: "Greece",
      city: "Santorini",
      continent: "Europe",
      description: "A beautiful island with whitewashed houses and blue domes.",
      price: 1500,
      duration: 7,
      highlights: ["Sunset at Oia", "Red Beach", "Ancient Akrotiri"],
      text: ["Breathtaking views", "Luxury resorts", "Amazing seafood"]
    },
    {
      name: "Bali",
      images: ["bali1.jpg", "bali2.jpg"],
      country: "Indonesia",
      city: "Denpasar",
      continent: "Asia",
      description: "A tropical paradise known for its beaches and temples.",
      price: 1200,
      duration: 10,
      highlights: ["Uluwatu Temple", "Rice terraces", "Surfing"],
      text: ["Relaxing beaches", "Vibrant nightlife", "Cultural experiences"]
    },
    {
      name: "Paris",
      images: ["paris1.jpg", "paris2.jpg"],
      country: "France",
      city: "Paris",
      continent: "Europe",
      description: "The city of love, home to the Eiffel Tower and world-class museums.",
      price: 1800,
      duration: 5,
      highlights: ["Eiffel Tower", "Louvre Museum", "Champs-Élysées"],
      text: ["Romantic atmosphere", "Rich history", "Gourmet food"]
    },
    {
      name: "Dubai",
      images: ["dubai1.jpg", "dubai2.jpg"],
      country: "UAE",
      city: "Dubai",
      continent: "Asia",
      description: "A city of luxury, skyscrapers, and desert adventures.",
      price: 2000,
      duration: 6,
      highlights: ["Burj Khalifa", "Desert Safari", "Palm Jumeirah"],
      text: ["Modern architecture", "Luxury shopping", "Exciting activities"]
    },
    {
      name: "Tokyo",
      images: ["tokyo1.jpg", "tokyo2.jpg"],
      country: "Japan",
      city: "Tokyo",
      continent: "Asia",
      description: "A high-tech city blending tradition and modernity.",
      price: 2200,
      duration: 7,
      highlights: ["Shibuya Crossing", "Mount Fuji", "Akihabara"],
      text: ["Amazing street food", "Anime culture", "Technological wonders"]
    },
    {
      name: "Rome",
      images: ["rome1.jpg", "rome2.jpg"],
      country: "Italy",
      city: "Rome",
      continent: "Europe",
      description: "A city rich in history, home to the Colosseum and Vatican City.",
      price: 1600,
      duration: 5,
      highlights: ["Colosseum", "Trevi Fountain", "Vatican City"],
      text: ["Ancient ruins", "Italian cuisine", "Art and history"]
    },
    {
      name: "Cape Town",
      images: ["cape1.jpg", "cape2.jpg"],
      country: "South Africa",
      city: "Cape Town",
      continent: "Africa",
      description: "A coastal city with stunning landscapes and wildlife.",
      price: 1400,
      duration: 8,
      highlights: ["Table Mountain", "Robben Island", "Cape Winelands"],
      text: ["Breathtaking views", "Safari adventures", "Rich culture"]
    },
    {
      name: "Sydney",
      images: ["sydney1.jpg", "sydney2.jpg"],
      country: "Australia",
      city: "Sydney",
      continent: "Australia",
      description: "A vibrant city known for its opera house and beaches.",
      price: 1900,
      duration: 6,
      highlights: ["Sydney Opera House", "Bondi Beach", "Harbour Bridge"],
      text: ["Beach vibes", "City life", "Adventure sports"]
    },
    {
      name: "New York",
      images: ["nyc1.jpg", "nyc2.jpg"],
      country: "USA",
      city: "New York",
      continent: "North America",
      description: "The city that never sleeps, full of iconic landmarks.",
      price: 2500,
      duration: 7,
      highlights: ["Statue of Liberty", "Times Square", "Central Park"],
      text: ["Endless entertainment", "Diverse culture", "Amazing food"]
    },
    {
      name: "Machu Picchu",
      images: ["machu1.jpg", "machu2.jpg"],
      country: "Peru",
      city: "Cusco",
      continent: "South America",
      description: "A breathtaking Incan city in the Andes Mountains.",
      price: 1700,
      duration: 6,
      highlights: ["Inca Trail", "Sun Gate", "Sacred Valley"],
      text: ["Historical significance", "Amazing landscapes", "Spiritual journey"]
    }
  ];
  
  export const myreviews: Review[] = [
    { userId: 1, destination: "Santorini", rating: 5, comment: "Absolutely stunning!", destinationid:"67db04cbbd0a094ada585bc0"},
    { userId: 2, destination: "Bali", rating: 4, comment: "Great beaches and friendly locals.",destinationid:"67db04cbbd0a094ada585bc1" },
    { userId: 3, destination: "Paris", rating: 5, comment: "A dream come true, loved every moment.",destinationid:"67db04cbbd0a094ada585bc2" },
    { userId: 4, destination: "Dubai", rating: 4, comment: "Luxurious and fun, but a bit expensive.",destinationid:"67db04cbbd0a094ada585bc3" },
    { userId: 5, destination: "Tokyo", rating: 5, comment: "Best city ever, so much to see and do!" ,destinationid:"67db04cbbd0a094ada585bc4"},
    { userId: 6, destination: "Rome", rating: 4, comment: "Full of history, but very crowded.", destinationid:"67db04cbbd0a094ada585bc5"},
    { userId: 7, destination: "Cape Town", rating: 5, comment: "Amazing views and wildlife!",destinationid:"67db04cbbd0a094ada585bc6" },
    { userId: 8, destination: "Sydney", rating: 4, comment: "Beautiful beaches and great weather.", destinationid:"67db04cbbd0a094ada585bc7"},
    { userId: 9, destination: "New York", rating: 5, comment: "So much energy, loved it!", destinationid:"67db04cbbd0a094ada585bc8"},
    { userId: 10, destination: "Machu Picchu", rating: 5, comment: "Incredible experience, highly recommended.", destinationid:"67db04cbbd0a094ada585bc9"}
  ];
  