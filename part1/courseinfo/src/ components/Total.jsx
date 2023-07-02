/* eslint-disable react/prop-types */

const Total = ({ exercises }) => {
  const total = exercises.reduce((acc, exercise) => acc + exercise.num, 0);
  console.log(total);
  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  );
};

export default Total;
