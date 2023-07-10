import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import { getAll, create, update } from "./services/services";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [inputName, setInputName] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAll()
      .then((res) => {
        setPersons(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const namesToShow =
    inputName.length === 0
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(inputName.toLowerCase())
        );

  //console.log(namesToShow);

  const addName = (e) => {
    e.preventDefault();

    if (newName === "") {
      return alert("Please input a name.");
    }

    const containValueName = persons.some((obj) =>
      Object.values(obj).includes(newName.trim())
    );

    if (containValueName) {
      const nameToBeUpdated = persons.filter(
        (person) => person.name === newName
      )[0].name;
      if (
        window.confirm(
          `${nameToBeUpdated} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        // find id of newName and name same with newName
        const idOfNameToBeUpdated = persons.filter(
          (person) => person.name === newName
        )[0].id;
        //console.log(idOfNameToBeUpdated);

        const nameOfPerson = persons.find((n) => n.id === idOfNameToBeUpdated);
        //console.log(nameOfPerson);
        // change phoneNum baed on id and using axios.put
        const changedNum = { ...nameOfPerson, number: newNumber };

        update(idOfNameToBeUpdated, changedNum)
          .then((res) => {
            setPersons(
              persons.map((person) =>
                person.id !== idOfNameToBeUpdated ? person : res.data
              )
            );
            setNewName("");
            setNewNumber("");
          })
          .catch((err) => console.log(err));
      }
      return;
    }

    const containValueNum = persons.some((obj) =>
      Object.values(obj).includes(newNumber.trim())
    );

    if (containValueNum) {
      return alert(`${newNumber} is already added to phonebook`);
    }

    const personObject = {
      name: newName.trim(),
      number: newNumber.trim(),
      id: persons.length + 1,
    };

    create(personObject)
      .then((res) => {
        setPersons(persons.concat(res.data));

        setNewName("");
        setNewNumber("");

        setMessage(`Added ${newName.trim()}`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      })
      .catch((err) => console.log(err));
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

      <Notification message={message} error={error} />

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

      <Persons
        namesToShow={namesToShow}
        persons={persons}
        setPersons={setPersons}
        setMessage={setMessage}
        setError={setError}
      />
    </div>
  );
};

export default App;

//npx json-server --port 3001 --watch db.json
