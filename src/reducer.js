import {
    getDateArray,
    startDate,
    endDate,
    day,
    initialDate,
  } from "./dateRange";

function reducer(state, action) {
    switch (action.type) {
      case "TOGGLEDATE":
        let date, index;
        if (action.payload.content === "next") {
          date = getDateArray(startDate, endDate).slice(
            state.index,
            state.index + 6
          );
          index = state.index + 6;
        }
        if (action.payload.content === "prev") {
          date = getDateArray(startDate, endDate).slice(
            state.index - 6 - 6,
            state.index - 6
          );
  
          index = state.index - 6;
        }
        return { ...state, date: date, index: index };
      case "START":
        let time = action.payload;
        return { ...state, startTime: time };
      case "DATE":
        return { ...state, userDate: action.payload };
      case "EVENTS":
        let userEvents = {
          date: action.payload.date,
          startTime: action.payload.start,
          endTime: action.payload.end,
        };
        return {
          ...state,
          userData: [...state.userData, userEvents],
          events: [...state.events, action.payload.event],
        };
      default:
        throw new Error()
    }
  }
  export default reducer

