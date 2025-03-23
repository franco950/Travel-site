import { useEffect, useState } from "react";

export type Flight = {
  id: number;
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
  
export type Transport = {
  id: number;
  mode: string;
  company: string;
  price: number; 
  origin: string;
  destination: string;
  slots: number;
};
  
export type Hotel = {
  id: number;
  name: string;
  class: string;
  price: number;
  slots: number;
  beds: number;
  city: string; 
};

export function getBooking(city:string) {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [transportation, setTransport] = useState<Transport[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    fetch(`http://localhost:5000/booking/${city}`)
      .then((response) => response.json())
      .then((homeData) => {
        setFlights(homeData.flights || []);
        setHotels(homeData.hotels || []);
        setTransport(homeData.transportation|| []);
        console.log('useDestinations works')
      })
      .catch((error) => {
        console.error("Unexpected error fetching booking details:", error);
        setError("Failed to fetch booking details.");
      })
      .finally(() => setLoading(false));
  }, []);

  return { flights, hotels, transportation, loading, error };
}