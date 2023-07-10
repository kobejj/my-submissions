import Button from "./Button";

/* eslint-disable react/prop-types */
const Persons = ({
  namesToShow,
  persons,
  setPersons,
  setMessage,

  setError,
}) => {
  return (
    <ul>
      {namesToShow.map((person) => (
        <div key={person.id}>
          {person.name} {person.number}{" "}
          <Button
            id={person.id}
            text="delete"
            persons={persons}
            setPersons={setPersons}
            setMessage={setMessage}
            setError={setError}
          />
        </div>
      ))}
    </ul>
  );
};

export default Persons;
