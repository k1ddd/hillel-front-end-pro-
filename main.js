const apiKey = "CkSNAVKzAqdXRuhLbFx9HOy2rXehD6KA";

const city = document.getElementById("select__city");
const showMeTheWeather = document.getElementById("btn");
const p = document.getElementById("weather");
const neighbors = document.getElementById("neighbors");

async function idCity(city) {
  const URL = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}`;

  const resultJson = await (await fetch(URL)).json();
  return resultJson[0].Key;
}

function neighborsInfo(event) {
  searchTheWeather(event.target.dataset.cityId, event.target.dataset.cityName);
}

async function searchTheWeather(cityId, cityName) {
  if (!cityId) {
    p.innerHTML = p.innerHTML = `<h2>Wrong city</h2>`;
    return;
  }
  const forcastSearch = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityId}?apikey=${apiKey}&metric=true;`;
  try {
    const weather = await (await fetch(forcastSearch)).json();
    const forecaststDaly = document.createElement("div");
    forecaststDaly.classList.add("info__forcast");

    p.innerHTML = `<h1> ${cityName}</h1>`;
    weather.DailyForecasts.forEach((value) => {
      const tempMin = Math.round(
        ((value.Temperature.Minimum.Value - 32) * 5) / 9
      );
      const tempMax = Math.round(
        ((value.Temperature.Maximum.Value - 32) * 5) / 9
      );
      const date = new Date(value.Date);
      p.innerHTML += `<span class="date">${date.toLocaleDateString(
        "en-UK"
      )}</span><p class="temp"> ${tempMin}°... ${tempMax}° </p><h4 class="cloudiness"> <span class="day__night">Day:</span> ${
        value.Day.IconPhrase
      }</h4> <h4 class="cloudiness"><span class="day__night">Night:</span> ${
        value.Night.IconPhrase
      }</h4>`;
    });
  } catch (error) {
    p.innerHTML = `<h4>Error in requested weather </h4>`;
    return;
  }

  const locationNeighbors = `https://dataservice.accuweather.com/locations/v1/cities/neighbors/${cityId}?apikey=${apiKey}`;
  try {
    const citiesNearby = await (await fetch(locationNeighbors)).json();

    const blockNeighbors = document.createElement("div");
    blockNeighbors.classList.add("block__neighbors");

    citiesNearby.forEach((el) => {
      const neighborValue = document.createElement("button");
      neighborValue.classList.add("neighbor__city");
      neighborValue.dataset.cityId = el.Key;
      neighborValue.dataset.cityName = el.LocalizedName;
      neighborValue.innerText = el.LocalizedName;
      neighborValue.addEventListener("click", neighborsInfo);
      blockNeighbors.appendChild(neighborValue);
    });

    neighbors.innerHTML = `<h2>Neighboring cities with: ${cityName}</h2>`;
    neighbors.appendChild(blockNeighbors);
  } catch (error) {
    p.innerHTML = `Error wheather of this city`;
    return;
  }
}

showMeTheWeather.addEventListener("click", async () => {
  const cityName = city.value;
  if (cityName === "") {
    p.innerHTML = `<h2>Wrong city, please correct city</h2>`;
    return;
  }
  const cityId = await idCity(cityName);
  searchTheWeather(cityId, cityName);
});
