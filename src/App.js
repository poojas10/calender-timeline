import { useState, useReducer} from "react";
import { useFormik } from "formik";
import reducer from "./reducer";
import Header from "./components/Header";
import {
  getDateArray,
  startDate,
  endDate,
  day,
} from "./dateRange";
import { time } from "./dateRange";
import Sidebar from "./components/Sidebar";
import Calender from "./components/Calender";

export const initialState = {
  date: getDateArray(startDate, endDate).slice(0, 6),
  index: 6,
  startTime: false,
  endTime: false,
  userDate: false,
  dataAdded: false,
  userData: [],
  events: [],
};
function App() {
  const [userSelectedDate, setUserDate] = useState("");
  const [userStartTime, setUserTime] = useState("");
  const [showForm,setForm] = useState(false)
  const [errorMessage,setErrorMessage]= useState(false)
  const formik = useFormik({
    initialValues: {
      start: "",
      end: "",
      event: "",
    },
    onSubmit: (values,{ resetForm }) => {
      addData({
        date: userSelectedDate,
        start: values.start?values.start:"09:00",
        end: values.end?values.end:"10:00",
        event: values.event,
      });
      resetForm()
    },
    validate: (values) => {
      let errors = {};
      if (!values.event.trim().length === 0) {
        errors.event = "Required";
      }
      return errors;
    },
  });
  const [state, dispatch] = useReducer(reducer, initialState);

  function addData(value) {
    console.log(value);
    let repeatedEntry = state.userData.find(
      (e, i, a) => e.date === value.date && e.startTime === value.start
    );
    if (
      (!repeatedEntry && +value.end.slice(0, 2) >= +value.start.slice(0, 2)) ||
      value.start === userStartTime
    ) {
      dispatch({ type: "EVENTS", payload: value });
      closeForm()
    }
    else{
      setErrorMessage('Event exist')
      closeForm()
    }
    if(!value.date){
      setErrorMessage('please click on a date in calender')
      closeForm()
    }
    // setForm(false)
  }
 
 
  function getDay(e) {
    setUserDate(e.target.closest("td").dataset.date);
    setUserTime(e.target.closest("td").dataset.time);
    setForm(prev=>!prev)
  }
  function closeForm(){
    setTimeout(() => {
      setForm(false)
      setErrorMessage(false)
    }, 2000);
  }
  return (
    <>
      {/* <h1></h1> */}
      {/* { console.log(date)} */}
      {/* <button
        onClick={() => {
          dispatch({ type: "TOGGLEDATE", payload: { content: "next" } });
        }}
      >
        next
      </button>
      <button
        onClick={() => {
          dispatch({ type: "TOGGLEDATE", payload: { content: "prev" } });
        }}
      >
       prev
      </button> */}
      <Header date={state.date} dispatch={dispatch} />
      <div className="calender-container">
      <Sidebar formik={formik} setForm={setForm} showForm={showForm} 
errorMessage={errorMessage}
/>
      <Calender day={day} state={state} getDay={getDay} time ={time} />

      </div>
</>
  );
}

export default App;
