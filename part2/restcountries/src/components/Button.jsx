/* eslint-disable react/prop-types */
const Button = ({ setViewDetails, country, setListDetails }) => {
  const handleClick = () => {
    // console.log(country.name.common);
    setListDetails(country.name.common);
    setViewDetails(true);
  };

  return <button onClick={handleClick}>show</button>;
};

export default Button;
