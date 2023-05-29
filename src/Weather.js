import React, { useEffect, useState } from 'react';

function Weather() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Karachi");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&lon=-2.15&appid=ef0f0300836e414211e7fd0596121116&units=metric`;
      const res = await fetch(url);
      const resjson = await res.json();
      setCity(resjson.main);
    };
    fetchApi();
  }, [search]);

  return (
  
    <div  id='main-div'>
      <div>
      <h1>Weather___APP</h1>
        <input type="search" className='inp-city' onChange={(event) => setSearch(event.target.value)} />
        {!city ? (
          <p>Data not found</p>
        ) : (
          <div>
            <h2>{search}</h2>
            <h1>{city.temp}°C</h1>
            <h3>
              Min: {city.temp_min}°C | Max: {city.temp_max}°C
            </h3>
          </div>
        )}
      </div>
    </div>
       
  );
}

export default Weather;



