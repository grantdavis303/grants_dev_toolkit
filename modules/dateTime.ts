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

  const temp = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );

  temp.setUTCDate(temp.getUTCDate() + 4 - (temp.getUTCDay() || 7));

  const yearStart = new Date(Date.UTC(temp.getUTCFullYear(), 0, 1));

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
