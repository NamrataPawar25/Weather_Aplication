const apiKey = "3c8b1e2700019471390b1eaa82bb9137"; // Your actual API key

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultBox = document.getElementById("weatherResult");

  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then((response) => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then((data) => {
      document.getElementById("cityName").textContent = data.name;
      document.getElementById("temperature").textContent = `Temperature: ${data.main.temp} °C`;
      document.getElementById("description").textContent = `Weather: ${data.weather[0].description}`;
      document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity} %`;
      document.getElementById("wind").textContent = `Wind Speed: ${data.wind.speed} m/s`;
      document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      resultBox.classList.remove("hidden");
    })
    .catch((error) => {
      alert(error.message);
      resultBox.classList.add("hidden");
    });
}
