import { eliminate } from "../services/services";

/* eslint-disable react/prop-types */
const Button = ({
  text,
  id,
  persons,
  setPersons,
  setMessage,

  setError,
}) => {
  const handleClick = () => {
    //console.log(`${id} is clicked`);
    const nameToBeDeleted = persons.filter((person) => person.id === id)[0]
      .name;
    //console.log(nameToBeDeleted);
    if (window.confirm(`Delete ${nameToBeDeleted}?`)) {
      eliminate(id)
        .then(() => {
          const updatedPersons = persons.filter((person) => person.id !== id);
          setPersons(updatedPersons);
        })
        .catch((err) => {
          console.log(err);
          setMessage(
            `Information of ${nameToBeDeleted} has already been removed from server`
          );
          setError(true);
          setTimeout(() => {
            setMessage(null);
            setError(false);
          }, 5000);
        });
    }
  };

  return <button onClick={handleClick}>{text}</button>;
};

export default Button;
