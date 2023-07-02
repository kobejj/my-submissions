import Header from "./ components/Header";
import Content from "./ components/Content";
import Total from "./ components/Total";

const App = () => {
  const course = "Half Stack application development";

  const exercises = [
    { name: "Fundamentals of React", num: 10 },
    { name: "Using props to pass data", num: 7 },
    { name: "State of a component", num: 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  );
};

export default App;
