function extractLocation(location) {
  const timeZoneElement = document.createElement("p");
  timeZoneElement.classList.add("time-zone");
  timeZoneElement.innerHTML = `Time Zone: ${location.timezone_id}`;

  const localTime = document.createElement("p");
  localTime.classList.add("local-time");
  localTime.innerHTML = `Local Time: ${location.localtime}`;

  locationElement.appendChild(timeZoneElement);
  locationElement.appendChild(localTime);
}

function extractDescription(current) {
  const temperatureDetails = document.createElement("div");
  temperatureDetails.classList.add("temperature-details");

  const temp = document.createElement("p");
  temp.classList.add("temperature");
  temp.innerHTML = `Temperature: ${current.temperature}°C`;

  const weatherIcon = document.createElement("img");
  weatherIcon.classList.add("weather-icon");
  weatherIcon.src = current.weather_icons[0];

  const weatherDescription = document.createElement("p");
  weatherDescription.classList.add("weather-description");
  weatherDescription.innerHTML = `Weather Description: ${current.weather_descriptions[0]}`;

  const humidity = document.createElement("p");
  humidity.classList.add("humidity");
  humidity.innerHTML = `Humidity: ${current.humidity}%`;

  temperatureDetails.appendChild(temp);
  temperatureDetails.appendChild(weatherIcon);
  temperatureDetails.appendChild(weatherDescription);
  temperatureDetails.appendChild(humidity);
  description.appendChild(temperatureDetails);

  const currentWeather = current.weather_descriptions[0].toLowerCase();

  chgBackgroundBasedOnWeather(currentWeather);
}

function chgBackgroundBasedOnWeather(weather) {
  let backgroundImages = {
    cloudy:
      "url(https://c.wallhere.com/photos/25/51/rain_clouds_felder_wolken_fields_thunderstorm_gewitter_regen-1101296.jpg!d)",
    sunny:
      "url(https://www.talkiesmagazine.nl/wp-content/uploads/2020/05/deze-zonnebrand-werkt-wel-lekker-op-het-gezicht-min-scaled.jpg)",
    rain: "url(https://pogodnik.com/wp-content/uploads/2021/12/ship_wall-1-e1639153361873.jpg)",
    snow: "url(https://i.pinimg.com/originals/6d/58/07/6d5807d4be8c4df4ba331de42662af48.jpg",
  };
  const bodyStyle = document.body.style;
  for (const curWeather in backgroundImages) {
    if (weather.includes(curWeather)) {
      bodyStyle.backgroundImage = backgroundImages[curWeather];
    }
  }
}
