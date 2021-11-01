export const day = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
export const startDate = new Date("02-01-2017"); //YYYY-MM-DD
export const endDate = new Date("02-01-2019"); //YYYY-MM-DD
export const initialDate = new Date("02-01-2017");

export const getDateArray = function (start, end) {
  let arr = [];
  let dt = new Date(start);
  while (dt <= end) {
    arr.push(new Date(dt));
    dt.setDate(dt.getDate() + 1);
  }
  return arr;
};
export const time = [
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
];
// export const endDate = new Date(startDate.setDate(startDate.getDate() + 6));
