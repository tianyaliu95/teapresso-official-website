"use client";

import React, { useMemo, useState } from "react";

const LOCATION_ORDER_URLS: Record<string, string> = {
  // "Manchester, UK": "https://www.teapresso.co.uk/s/order?location=11eff9bbb340e1a699353cecef6dbab4",
  "Leeds, UK": "https://www.teapresso.co.uk/s/order?location=11eff9bbb340e1a699353cecef6dbab4",
  // "Glasgow, UK": "https://www.teapresso.co.uk/s/order?location=11eff9bbb340e1a699353cecef6dbab4",
  // "Greater Toronto Area, Canada": "https://www.teapresso.co.uk/s/order?location=11eff9bbb340e1a699353cecef6dbab4",
};

export default function StartOrderingForm() {
  const [selectedLocation, setSelectedLocation] = useState("");

  const selectedUrl = useMemo(
    () => (selectedLocation ? LOCATION_ORDER_URLS[selectedLocation] : ""),
    [selectedLocation]
  );

  return (
    <div id="start-ordering" className="mx-auto mb-12 max-w-sm space-y-4 hover:cursor-pointer">
      <select
        required
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
        className="w-full bg-white border border-gray-300 text-[#2e3f3a] font-semibold py-4 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2e3f3a]/30 focus:border-[#2e3f3a]"
      >
        <option value="" disabled>
          Select your location
        </option>
        {Object.keys(LOCATION_ORDER_URLS).map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>

      <a
        href={selectedUrl || "#"}
        target="_blank"
        rel="noopener noreferrer"
        aria-disabled={!selectedLocation}
        onClick={(e) => {
          if (!selectedLocation) e.preventDefault();
        }}
        className={`inline-block w-full bg-[#2e3f3a] hover:bg-[#2e3f3a]/90 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 transform hover:scale-105 ${!selectedLocation ? "opacity-60 cursor-not-allowed hover:scale-100" : ""}`}
      >
        Start Ordering
      </a>
    </div>
  );
}
