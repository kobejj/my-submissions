import Button from "./Button";
import CountryDetails from "./CountryDetails";

/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const CountriesList = ({
  countriesToShow,
  viewDetails,
  setViewDetails,
  listDetails,
  setListDetails,
  setCapital,
  weather,
}) => {
  //console.log(countriesToShow);
  return (
    <div>
      <ul>
        {countriesToShow.map((country) => (
          <div key={country.name.common}>
            <li>
              {country.name.common}{" "}
              <Button
                setViewDetails={setViewDetails}
                country={country}
                setListDetails={setListDetails}
              />
            </li>
            <div>
              {viewDetails && country.name.common === listDetails ? (
                <CountryDetails
                  country={country}
                  setCapital={setCapital}
                  weather={weather}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CountriesList;
