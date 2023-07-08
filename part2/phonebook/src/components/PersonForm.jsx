/* eslint-disable react/prop-types */
const PersonForm = ({
  onSubmit,
  newName,
  newNumber,
  handleChangeName,
  handleChangeNum,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input value={newName} onChange={handleChangeName} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleChangeNum} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
