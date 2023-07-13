// Importing necessary dependencies and components
import { useState, useEffect } from "react";
import { getAll, getWeatherInfo } from "./services/services";
import Notification from "./components/Notification";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";

function App() {
  // Defining states for the application
  const [countries, setCountries] = useState([]);
  const [inputCountry, setInputCountry] = useState("");
  const [viewDetails, setViewDetails] = useState(false);
  const [listDetails, setListDetails] = useState("");
  const [capital, setCapital] = useState("London");
  const [weather, setWeather] = useState(null);

  // Fetching countries on initial render
  useEffect(() => {
    getAll()
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Fetching weather info whenever the capital changes
  useEffect(() => {
    getWeatherInfo(capital)
      .then((res) => {
        setWeather(res.data);
      })
      .catch((err) => console.log(err));
  }, [capital]);

  // Filtering countries based on inputCountry
  const countriesToShow =
    inputCountry.length === 0
      ? countries
      : countries.filter((country) =>
          country.name.common.toLowerCase().includes(inputCountry.toLowerCase())
        );

  // Handling changes in the input field
  const handleChange = (e) => {
    setInputCountry(e.target.value);
  };

  // Function to determine what to display based on number of countries to show
  const display = () => {
    if (countriesToShow.length > 10 && inputCountry.length > 0) {
      return (
        <Notification message="too many matches.  specify another filter" />
      );
    } else if (countriesToShow.length <= 10 && countriesToShow.length >= 2) {
      return (
        <CountriesList
          countriesToShow={countriesToShow}
          viewDetails={viewDetails}
          setViewDetails={setViewDetails}
          listDetails={listDetails}
          setListDetails={setListDetails}
          setCapital={setCapital}
          weather={weather}
        />
      );
    } else if (countriesToShow.length === 1) {
      const country = countriesToShow[0];
      return (
        <CountryDetails
          country={country}
          setCapital={setCapital}
          weather={weather}
        />
      );
    } else {
      return;
    }
  };

  // Return the rendered components
  return (
    <div>
      <div>
        find countries <input value={inputCountry} onChange={handleChange} />
      </div>
      {display()}
    </div>
  );
}

export default App;
