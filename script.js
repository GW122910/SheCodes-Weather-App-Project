//Displaying the current date and time
let now = new Date();

let day = document.getElementById("date");
let hour = document.getElementById("hour");
let minutes = document.getElementById("minutes");

let timeHour = now.getHours();
let timeMin = now.getMinutes();

timeHour = timeHour < 10 ? "0" + timeHour : timeHour;
timeMin = timeMin < 10 ? "0" + timeMin : timeMin;

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let weekDay = days[now.getDay()];

day.innerHTML = `${weekDay}`;
hour.innerHTML = `${timeHour}`;
minutes.innerHTML = `${timeMin}`;

//Search and display the city name and temperature
function displayTemperature(response) {
  let dataCurrentTemp = response.data.temperature.current;
  /*let temperature = Math.round(response.data.temperature.current);
  let city = response.data.city;

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${city}`;
  let temperatureElement = document.querySelector(".current-temperature-value");
  temperatureElement.innerHTML = `${temperature}`;*/
}

function addCity(event) {
  event.preventDefault();
  let h1City = document.querySelector("h1");
  let searchInput = document.getElementById("searchValue");

  h1City.innerHTML = `${searchInput.value}`;

  let apiKey = "becd8to447f4738fdfa70fbace5884f5";
  let unit = "metric";
  let apiWeatherUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInput.value}&key=${apiKey}&unit=${unit}`;

  axios.get(apiWeatherUrl).then(displayTemperature);
}

let search = document.getElementById("searchBox");
search.addEventListener("submit", addCity);
