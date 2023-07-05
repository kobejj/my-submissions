/* eslint-disable react/prop-types */

const Total = ({ exercises }) => {
  const total = exercises.reduce(
    (acc, exercise) => acc + exercise.exercises,
    0
  );

  console.log(total);
  return (
    <>
      <p style={{ fontWeight: "bold" }}>total of {total} exercises</p>
    </>
  );
};

export default Total;
