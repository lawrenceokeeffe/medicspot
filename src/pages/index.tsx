import { useState, useEffect } from "react";
import React from "react";

export default function Home() {
  const [query, setQuery] = useState(""); // For the search query
  const [results, setResults] = useState([]); // For storing API results

  useEffect(() => {
    if (query.length >= 2) {
      // Fetch results when the query is 2 or more characters
      fetch(`/api/locations?q=${query}`)
        .then((response) => response.json())
        .then((data) => setResults(data))
        .catch((error) => console.error("Error fetching data:", error));
    } else {
      // Clear results if query length is less than 2
      setResults([]);
    }
  }, [query]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Search for Locations</h1>
      {/* Search input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search here..."
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      />
      {/* Results */}
      <ul>
        {results.map((result: { name: string; latitude: number; longitude: number }, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {result.name}{" "}
            <span style={{ color: "gray" }}>
              (Lat: {result.latitude}, Long: {result.longitude})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
