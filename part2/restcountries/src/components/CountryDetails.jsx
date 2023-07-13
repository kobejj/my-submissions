import { useEffect } from "react";

/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const CountryDetails = ({ country, setCapital, weather }) => {
  // console.log(country);
  // console.log(weather.weather[0].icon);
  useEffect(() => {
    if (country) {
      setCapital(country.capital[0]);
    }
  }, [country, setCapital]);
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>
        {`    
        Capital: 
        ${country.capital}
        `}
      </p>
      <p>
        {`    
        Area: 
        ${country.area}
        `}
      </p>
      <p>
        {`    
        Population: 
        ${country.population}
        `}
      </p>
      <strong>Language</strong>
      {Object.entries(country.languages).map(([code, language]) => (
        <ul key={code}>
          <li>{language}</li>
        </ul>
      ))}

      <img alt="flag" src={country.flags["png"]} style={{ width: "200px" }} />
      <h2>{`Weather in ${country.capital[0]}`}</h2>
      <p>
        {`    
        temperature: 
        ${(weather.main.temp - 273.15).toFixed(2)} Celcius / ${(
          (weather.main.temp * 9) / 5 -
          459.67
        ).toFixed(2)} Fahrenheit
        `}
      </p>
      <img
        alt="weather"
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
      />
      <p>
        {`    
        
        ${weather.weather[0].main}  - ${weather.weather[0].description}
        `}
      </p>
      <p>
        {`    
        wind: 
        ${weather.wind.speed} m/s
        `}
      </p>
    </div>
  );
};

export default CountryDetails;

// name
// capital
// areaCountry

// language
// flag
