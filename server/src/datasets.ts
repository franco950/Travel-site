// Define Types
type User = {
    id?: number;
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
    departuretime: number;
    arrivaltime: number;
    slots: number;
  };
  
  type Transport = {
    id?: number;
    mode: string;
    company: string;
    price: string;
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
  };
 
  export const users: User[] = [
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
  ];

  export const flights: Flight[] = [
    { airline: "Airways A", price: 299.99, class: "Economy", origin: "New York", destination: "London", departuretime: 1400, arrivaltime: 2200, slots: 50 },
    { airline: "Airways B", price: 499.99, class: "Business", origin: "Los Angeles", destination: "Tokyo", departuretime: 1600, arrivaltime: 600, slots: 30 },
    { airline: "SkyJet", price: 399.99, class: "Economy", origin: "Paris", destination: "Dubai", departuretime: 1200, arrivaltime: 2000, slots: 40 },
    { airline: "Cloud Airlines", price: 299.99, class: "Economy", origin: "Berlin", destination: "New York", departuretime: 1800, arrivaltime: 600, slots: 45 },
    { airline: "FastFlight", price: 549.99, class: "First", origin: "San Francisco", destination: "Sydney", departuretime: 2300, arrivaltime: 1100, slots: 20 },
    { airline: "Air Elite", price: 450.99, class: "Business", origin: "Toronto", destination: "Dubai", departuretime: 1700, arrivaltime: 300, slots: 25 },
    { airline: "Blue Skies", price: 280.99, class: "Economy", origin: "Chicago", destination: "Mexico City", departuretime: 1300, arrivaltime: 1700, slots: 35 },
    { airline: "Eagle Air", price: 320.00, class: "Economy", origin: "Madrid", destination: "Rome", departuretime: 900, arrivaltime: 1100, slots: 60 },
    { airline: "JetGo", price: 500.99, class: "Business", origin: "Boston", destination: "Amsterdam", departuretime: 2200, arrivaltime: 700, slots: 25 },
    { airline: "FlyAway", price: 270.99, class: "Economy", origin: "Hong Kong", destination: "Bangkok", departuretime: 1100, arrivaltime: 1400, slots: 55 }
  ];
  
  export const transports: Transport[] = [
    { mode: "Bus", company: "CityTransit", price: "10.99", origin: "New York", destination: "Boston", slots: 50 },
    { mode: "Train", company: "Railway Express", price: "25.50", origin: "London", destination: "Manchester", slots: 100 },
    { mode: "Car Rental", company: "Rent-a-Car", price: "45.00", origin: "Los Angeles", destination: "San Francisco", slots: 20 },
    { mode: "Ferry", company: "Sea Link", price: "30.00", origin: "Athens", destination: "Santorini", slots: 70 },
    { mode: "Bus", company: "QuickBus", price: "15.99", origin: "Berlin", destination: "Munich", slots: 40 },
    { mode: "Train", company: "Speed Rail", price: "40.00", origin: "Paris", destination: "Brussels", slots: 80 },
    { mode: "Car Rental", company: "GoDrive", price: "55.00", origin: "Rome", destination: "Florence", slots: 10 },
    { mode: "Bus", company: "FastTrack", price: "12.50", origin: "Madrid", destination: "Barcelona", slots: 60 },
    { mode: "Ferry", company: "Ocean Liner", price: "50.00", origin: "Venice", destination: "Dubrovnik", slots: 30 },
    { mode: "Train", company: "EuroRail", price: "65.00", origin: "Amsterdam", destination: "Berlin", slots: 90 }
  ];
  
  export const hotels: Hotel[] = [
    { name: "Grand Hotel", class: "5-Star", price: 200, slots: 50, beds: 100 },
    { name: "Ocean View", class: "4-Star", price: 150, slots: 30, beds: 60 },
    { name: "Mountain Lodge", class: "3-Star", price: 100, slots: 20, beds: 40 },
    { name: "City Inn", class: "4-Star", price: 120, slots: 40, beds: 80 },
    { name: "Skyline Suites", class: "5-Star", price: 250, slots: 35, beds: 70 },
    { name: "Sunset Resort", class: "5-Star", price: 180, slots: 25, beds: 50 },
    { name: "Budget Stay", class: "2-Star", price: 80, slots: 15, beds: 30 },
    { name: "Royal Palace", class: "5-Star", price: 300, slots: 20, beds: 40 },
    { name: "Lakeside Retreat", class: "4-Star", price: 140, slots: 30, beds: 60 },
    { name: "Winter Lodge", class: "3-Star", price: 110, slots: 25, beds: 50 }
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
  
  export const reviews: Review[] = [
    { userId: 1, destination: "Santorini", rating: 5, comment: "Absolutely stunning!" },
    { userId: 2, destination: "Bali", rating: 4, comment: "Great beaches and friendly locals." },
    { userId: 3, destination: "Paris", rating: 5, comment: "A dream come true, loved every moment." },
    { userId: 4, destination: "Dubai", rating: 4, comment: "Luxurious and fun, but a bit expensive." },
    { userId: 5, destination: "Tokyo", rating: 5, comment: "Best city ever, so much to see and do!" },
    { userId: 6, destination: "Rome", rating: 4, comment: "Full of history, but very crowded." },
    { userId: 7, destination: "Cape Town", rating: 5, comment: "Amazing views and wildlife!" },
    { userId: 8, destination: "Sydney", rating: 4, comment: "Beautiful beaches and great weather." },
    { userId: 9, destination: "New York", rating: 5, comment: "So much energy, loved it!" },
    { userId: 10, destination: "Machu Picchu", rating: 5, comment: "Incredible experience, highly recommended." }
  ];
  