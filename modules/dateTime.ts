const date = new Date(); // 2025-11-15T14:14:13.493Z

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Getting Date Information

date.getFullYear(); // 2025
date.getDay(); // 6
days[date.getDay()]; // 'Saturday'
date.getMonth(); // 10
months[date.getMonth()]; // 'November'
date.getDate(); // 15

// Getting Time Information

date.getHours(); // 7
date.getMinutes(); // 14
date.getSeconds(); // 13
date.getMilliseconds(); // 493
date.toLocaleTimeString(); // '7:14:13 AM'

// Returns a string of the current weekday
export function getCurrentDay() {
  const date = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[date.getDay()];
}

// Returns an integer for the current week number
export function getCurrentWeek() {
  const date = new Date();

  const temp:any = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );

  temp.setUTCDate(temp.getUTCDate() + 4 - (temp.getUTCDay() || 7));

  const yearStart:any = new Date(Date.UTC(temp.getUTCFullYear(), 0, 1));

  const weekNumber = Math.ceil(((temp - yearStart) / 86400000 + 1) / 7);

  return weekNumber;
}

// Returns a string of the current month
export function getCurrentMonth() {
  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[date.getMonth()];
}

// Returns a formatted string of the current time
export function updateTime() {
  const date = new Date();
  const formattedTime = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return formattedTime;
}
