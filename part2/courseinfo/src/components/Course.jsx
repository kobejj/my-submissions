/* eslint-disable react/prop-types */
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ courses }) => {
  console.log(courses);
  return (
    <>
      {courses.map((course) => (
        <div key={course.id}>
          <Header course={course.name} />
          <Content exercises={course.parts} />
          <Total exercises={course.parts} />
        </div>
      ))}
    </>
  );
};

export default Course;
