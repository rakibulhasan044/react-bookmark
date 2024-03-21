import PropTypes from "prop-types";

const Joma = ({ joma }) => {
  return (
    <div className="p-4  bg-slate-700 rounded-xl">
      <h3 className="text-2xl  font-bold">Total Course Taken: {joma.length}</h3>
      <div className="divider"></div>
      <div className="text-2xl  font-bold border-b-2 border-gray-400">course name: </div>
      <div className="font-bold py-2 ">
        <ul>
          {joma.map((j) => (
            <li key={j.id}>{j.name}</li>
          ))}
        </ul>
      </div>
      <div>total credit hour: {joma.reduce((p, c) => p + c.credit, 0)}</div>
      <div>total price: {joma.reduce((p, c) => p + c.price, 0)}tk</div>
    </div>
  );
};

Joma.propTypes = {
  joma: PropTypes.array,
};

export default Joma;
