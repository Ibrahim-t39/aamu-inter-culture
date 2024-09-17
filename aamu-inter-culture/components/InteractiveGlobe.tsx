"use client";

import React, { useEffect, useRef } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";
import "../app/globals.css"; // Ensure you're importing the actual CSS file

interface Country {
  lat: number;
  lng: number;
  size: number;
  color: string;
  name: string;
}

interface InteractiveGlobeProps {
  countries: Country[];
}

const InteractiveGlobe: React.FC<InteractiveGlobeProps> = ({ countries }) => {
  const globeRef = useRef<GlobeMethods | undefined>(undefined);

  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1;
    }
  }, []);

  return (
    <Globe
      ref={globeRef}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
      backgroundColor="#ffffff"
      pointsData={countries}
      pointAltitude={(point: object) => (point as Country).size} // Typecasting point to Country
      pointColor={(point: object) => (point as Country).color} // Typecasting point to Country
      labelText={(point: object) => (point as Country).name} // Typecasting point to Country
      width={500}
      height={500}
    />
  );
};

export default InteractiveGlobe;
