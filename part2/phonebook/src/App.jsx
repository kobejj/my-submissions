import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const [inputName, setInputName] = useState("");

  const namesToShow =
    inputName.length === 0
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(inputName.toLowerCase())
        );

  console.log(namesToShow);

  const addName = (e) => {
    e.preventDefault();

    const containValueName = persons.some((obj) =>
      Object.values(obj).includes(newName)
    );

    if (containValueName) {
      return alert(`${newName} is already added to phonebook`);
    }

    const containValueNum = persons.some((obj) =>
      Object.values(obj).includes(newNumber)
    );

    if (containValueNum) {
      return alert(`${newNumber} is already added to phonebook`);
    }

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
  };

  const handleInputName = (e) => {
    console.log(e.target.value);
    setInputName(e.target.value);
  };

  const handleChangeName = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };
  const handleChangeNum = (e) => {
    console.log(e.target.value);
    setNewNumber(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter value={inputName} onChange={handleInputName} />

      <h3>Add a new</h3>

      <PersonForm
        onSubmit={addName}
        newName={newName}
        handleChangeName={handleChangeName}
        newNumber={newNumber}
        handleChangeNum={handleChangeNum}
      />

      <h2>Numbers</h2>

      <Persons namesToShow={namesToShow} />
    </div>
  );
};

export default App;
