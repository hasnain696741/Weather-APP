import React, { useEffect, useState } from 'react';

function Wea() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Karachi");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=ef0f0300836e414211e7fd0596121116&units=metric`;
      const response = await fetch(url);
      const resjson = await response.json();
      setCity(resjson);
      setLoading(false);
    };

    setLoading(true);
    fetchApi();
  }, [search]);

  useEffect(() => {
    // Fetch weather data for Karachi on component mount
    fetchWeatherData("Karachi");
  }, []);

  const fetchWeatherData = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ef0f0300836e414211e7fd0596121116&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    setCity(data);
  };

  return (
    <div>
      <div>
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        {loading ? (
          <p>Loading...</p>
        ) : !city ? (
          <p>No data found</p>
        ) : (
          <div>
            <h1>{search}</h1>
            {city.main && city.main.temp ? (
              <h2>{city.main.temp}°C</h2>
            ) : (
              <div></div>
            )}
            {city.main && city.main.temp_min && city.main.temp_max ? (
              <h3>
                Min: {city.main.temp_min}°C | Max: {city.main.temp_max}°C
              </h3>
            ) : (
              <div></div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Wea;


