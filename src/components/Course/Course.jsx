import PropTypes from "prop-types";
const Course = ({ course, handleCourseSelect }) => {
  const { photo, name, description, price, credit } = course;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="flex justify-between">
          <p>$-{price}</p>
          <p>{credit} credit</p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => handleCourseSelect(course)}
        >
          Select
        </button>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object,
  handleCourseSelect: PropTypes.func,
};
export default Course;
