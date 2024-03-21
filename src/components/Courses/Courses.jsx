import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = ({ handleCourseSelect }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((course) => (
        <Course
          key={course.id}
          course={course}
          handleCourseSelect={handleCourseSelect}
        ></Course>
      ))}
    </div>
  );
};

Courses.propTypes = {
  handleCourseSelect: PropTypes.func,
};
export default Courses;
