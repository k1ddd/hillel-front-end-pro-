const apiKey = "EtabGNTDzqYExiuCoCeB2oFE0FXu3bZG";
const city = document.querySelector("#select__city");
const showMeTheWeather = document.querySelector("#btn");
const p = document.querySelector("#weather");
const weatherOfTheCity = {
  Lviv: 324561,
  Kyiv: 324505,
  Kharkiv: 323903,
  Chernihiv: 322162,
  Odesa: 325343,
  Mariupol: 323037,
  Poltava: 325523,
  Zhytomyr: 326609,
  Cherkasy: 321985,
  London: 328328,
  Warsaw: 274663,
  "New York": 349727,
};

function loadData() {
  const xhttp = new XMLHttpRequest();

  xhttp.open(
    "GET",
    `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${
      weatherOfTheCity[city.value]
    }?apikey=${apiKey}`
  );
  xhttp.send();

  xhttp.onload = function () {
    if (this.readyState === 4 && this.status === 200) {
      const result = JSON.parse(this.response);
      p.innerHTML = `<h1> ${city.value}</h1>`;
      result.DailyForecasts.forEach((value) => {
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
    } else alert("Error, invalid status, please check");
  };
}
showMeTheWeather.addEventListener("click", loadData);
