//Question 1
//human readable time format by making the necessary 1 digit into 2 digits
// The time format is YYYY-MM-DD HH:mm
let currentDate = new Date();
let years = currentDate.getFullYear();
let month = String(currentDate.getMonth() + 1).padStart(2, '0');
let day = String(currentDate.getDate()).padStart(2, '0');
let hours = String(currentDate.getHours()).padStart(2, '0');
let minutes = String(currentDate.getMinutes()).padStart(2, '0');
let formattedTime = `${years}-${month}-${day} ${hours}:${minutes}}`;
console.log(formattedTime);