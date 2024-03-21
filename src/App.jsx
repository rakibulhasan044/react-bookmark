import { useState } from "react";
import "./App.css";
import Courses from "./components/Courses/Courses";
import Joma from "./components/Joma/Joma";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const totalCredit = 15;

function App() {
  const [joma, setJoma] = useState([]);
  const handleCourseSelect = (course) => {
    console.log(course);

    const credit = joma.reduce((p, c) => p + c.credit, 0);
    console.log(credit);
    console.log(course.credit);
    if (credit + course.credit > totalCredit) {
      return toast.error(`only ${totalCredit} credits allowed`);
    }
    const isExists = joma.find((c) => c.id === course.id);
    if (!isExists) {
      const newJoma = [...joma, course];
      setJoma(newJoma);
      toast.success("Course added !");
    } else {
      toast.warn("Course already selected !!");
    }
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center py-8">Course Registration</h1>
      <div className="flex justify-between gap-5 px-4">
        <div className="w-4/5">
          <Courses handleCourseSelect={handleCourseSelect}></Courses>
        </div>
        <div className="1/5">
          <Joma joma={joma}></Joma>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
export default App;
