import { useEffect, useState } from "react";

export type Destination = {
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

export type Review = {
  id?: string;
  userId: number;
  destination: string;
  rating: number;
  comment: string;
};

export function getSingleDestination(id:string){
  const [destination, setDestination] = useState<Destination>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`http://localhost:5000/destinations/${id}`)
    
    .then((response) => response.json())
      .then((aboutData) => {
        setDestination(aboutData.mydestination || "");
        
        console.log('getdestination works')
      })
      .catch((error) => {
        console.error("Unexpected error fetching description:", error);
        setError("Failed to fetch desctiption.");
      })
      .finally(() => setLoading(false));
  }, []);

  return { destination, loading, error};
      
}
export function useDestinations() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/home",{
      method: "GET",
      headers: {
        "Content-Type": "application/json", 
      },
      
      credentials: "include",})
      .then((response) => response.json())
      .then((homeData) => {
        setDestinations(homeData.destinations || []);
        console.log('useDestinations works')
      })
      .catch((error) => {
        console.error("Unexpected error fetching destinations:", error);
        setError("Failed to fetch destinations.");
      })
      .finally(() => setLoading(false));
  }, []);

  return { destinations,  loading, error };
}

export function searchDestinations(
  
  destinations: Destination[],
   filters: {
    namequery?: string;
    countryquery?: string;
    cityquery?: string;
    continentquery?: string;
    pricequery?: number;
    durationquery?: number;
  } = {}
) {
  if (!filters.namequery && !filters.countryquery && !filters.cityquery && !filters.continentquery && !filters.pricequery && !filters.durationquery) {
    return destinations
  }
  
  return destinations.filter((destination) => {
    
    if (filters.namequery && !destination.name.toLowerCase().includes(filters.namequery.toLowerCase())) {
      return false;
    }
    if (filters.countryquery && !destination.country.toLowerCase().includes(filters.countryquery.toLowerCase())) {
      return false;
    }
    if (filters.cityquery && !destination.city.toLowerCase().includes(filters.cityquery.toLowerCase())) {
      return false;
    }
    if (filters.continentquery && !destination.continent.toLowerCase().includes(filters.continentquery.toLowerCase())) {
      return false;
    }
    if (
      filters.pricequery &&
      (destination.price !< filters.pricequery)
    ) {
      return false;
    }
    if (
      filters.durationquery &&
      (destination.duration !< filters.durationquery )
    ) {
      return false;
    }
    console.log('search function works')
    return true;
  });
}