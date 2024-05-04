import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import axios from "axios";

interface MapDisplayProps {
  lat: number;
  long: number;
}

const MapDisplay = ({ lat, long }: MapDisplayProps) => {
  const position: [number, number] = [lat, long];
  const [isLoading, setIsLoading] = useState(true);
  const [address, setAddress] = useState("");
  return (
    <div style={{ height: "400px", width: "100%" }}>
      
      
    </div>
  );
};

export default MapDisplay;