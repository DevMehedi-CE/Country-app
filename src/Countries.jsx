import React, { useEffect, useState } from "react";
import SingleCountry from "./SingleCountry";

const Countries = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const url = "https://restcountries.com/v3.1/all";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);

  return (
    <div>
      {country.map((country, key) => (
        <SingleCountry key={key} country={country} />
      ))}
    </div>
  );
};

export default Countries;
