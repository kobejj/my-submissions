import Part from "./Part";
/* eslint-disable react/prop-types */

const Content = ({ exercises }) => {
  // console.log(exercises);
  return (
    <>
      {exercises.map((exercise) => (
        <Part key={exercise.name} exercise={exercise} />
      ))}
    </>
  );
};

export default Content;
