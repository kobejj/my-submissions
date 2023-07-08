/* eslint-disable react/prop-types */
const Persons = ({ namesToShow }) => {
  return (
    <ul>
      {namesToShow.map((person) => (
        <div key={person.id}>
          {person.name} {person.number}
        </div>
      ))}
    </ul>
  );
};

export default Persons;
