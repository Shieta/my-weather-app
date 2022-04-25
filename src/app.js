function displayTemperature(response) {
  console.log(response.data.main);
}

let apiKey = "a22b96dbbce104ed6797b40b52579d0c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
