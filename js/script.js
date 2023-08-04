let inputLocation = document.getElementById("inputLocation");
let searchLocation = document.getElementById("searchLocation");
const urlApi = "https://api.weatherapi.com/v1/forecast.json?";
const keyApi = "key=8b23a08c1cbe4474930112320230308";
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
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

searchLocation.addEventListener("click", async function getWeather() {
  let apiResponse = await fetch(
    urlApi + keyApi + "&q=" + inputLocation.value + "&days=" + 3 + "&q="
  );
  let apiResult = await apiResponse.json();
  ////////////
  function getToday() {
    let box1 = ``;
    let day = days[new Date(apiResult.forecast.forecastday[0].date).getDay()];
    let month =
      months[new Date(apiResult.forecast.forecastday[0].date).getMonth()];
    box1 += `<div class="weather-date d-flex justify-content-between p-2">
      <div>${day}</div>
      <div>${
        new Date(apiResult.forecast.forecastday[0].date).getDate() + month
      }</div>
    </div>
    <div class="weather-statuts p-4">
      <div class="location">${apiResult.location.name}</div>
      <div class="degree d-flex justify-content-between align-items-center">
        <div class="weather-temperature">${
          apiResult.current.temp_c
        }<sup>o</sup>C</div>
        <div class="weather-icon"><img src="${
          apiResult.forecast.forecastday[0].day.condition.icon
        }"></div>
      </div>
      <div class="weather-statut my-4">${
        apiResult.forecast.forecastday[0].day.condition.text
      }</div>
      <div class="weather-indicators d-flex gap-4">
        <div class="d-flex gap-2">
          <img src="img/icon-umberella.png">
          <span>20%</span>
          </div>
          <div class="d-flex gap-2">
            <img src="img/icon-wind.png">

            <span>18Km/h</span>
          </div>
          <div class="d-flex gap-2">
            <img src="img/icon-compass.png">
            <span>East</span>
        </div>
      </div>
    </div>
    `;
    document.getElementById("weatherToday").innerHTML = box1;
  }
  getToday();
  function getTomorrow() {
    let box2 = ``;
    let day = days[new Date(apiResult.forecast.forecastday[1].date).getDay()];
    let month =
      months[new Date(apiResult.forecast.forecastday[1].date).getMonth()];
    box2 += `<div class="weather-date d-flex justify-content-between p-2">
    <div>${day}</div>
    <div>${
      new Date(apiResult.forecast.forecastday[1].date).getDate() + month
    }</div>
  </div>
  <div class="weather-statuts d-flex flex-column align-items-center p-5">
      <div class="weather-icon"><img src="${
        apiResult.forecast.forecastday[1].day.condition.icon
      }"></div>
      <div class="weather-temperature">${
        apiResult.forecast.forecastday[1].day.maxtemp_c
      }<sup>o</sup>C</div>
      <div>${apiResult.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></div>
      <div class="weather-statut my-4">${
        apiResult.forecast.forecastday[1].day.condition.text
      }</div>
  </div>
    `;
    document.getElementById("weatherTomorrow").innerHTML = box2;
  }
  getTomorrow();
  function getAfterTomorrow() {
    let box3 = ``;
    let day = days[new Date(apiResult.forecast.forecastday[2].date).getDay()];
    let month =
      months[new Date(apiResult.forecast.forecastday[2].date).getMonth()];
    box3 += `<div class="weather-date d-flex justify-content-between p-2">
    <div>${day}</div>
    <div>${
      new Date(apiResult.forecast.forecastday[2].date).getDate() + month
    }</div>
  </div>
  <div class="weather-statuts d-flex flex-column align-items-center p-5">
      <div class="weather-icon"><img src="${
        apiResult.forecast.forecastday[2].day.condition.icon
      }"></div>
      <div class="weather-temperature">${
        apiResult.forecast.forecastday[2].day.maxtemp_c
      }<sup>o</sup>C</div>
      <div>${apiResult.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></div>
      <div class="weather-statut my-4">${
        apiResult.forecast.forecastday[2].day.condition.text
      }</div>
  </div>
    `;
    document.getElementById("weatherAfterTomorrow").innerHTML = box3;
  }
  getAfterTomorrow();
});
///////////////////////////////////////////////////////
function tst() {
  ///get  location for user
  const successCallback = async (position) => {
    let x = position.coords.latitude;
    let y = position.coords.longitude;
    let apiResponse = await fetch(
      urlApi + keyApi + "&q=" + x + "," + y + "&days=" + 3
    );
    let apiResult = await apiResponse.json();

    function getToday() {
      let box4 = ``;
      let day = days[new Date(apiResult.forecast.forecastday[0].date).getDay()];
      let month =
        months[new Date(apiResult.forecast.forecastday[0].date).getMonth()];
      box4 += `<div class="weather-date d-flex justify-content-between p-2">
            <div>${day}</div>
            <div>${
              new Date(apiResult.forecast.forecastday[0].date).getDate() + month
            }</div>
          </div>
          <div class="weather-statuts p-4">
            <div class="location">${apiResult.location.name}</div>
            <div class="degree d-flex justify-content-between align-items-center">
              <div class="weather-temperature">${
                apiResult.current.temp_c
              }<sup>o</sup>C</div>
              <div class="weather-icon"><img src="${
                apiResult.forecast.forecastday[0].day.condition.icon
              }"></div>
            </div>
            <div class="weather-statut my-4">${
              apiResult.forecast.forecastday[0].day.condition.text
            }</div>
            <div class="weather-indicators d-flex gap-4">
              <div class="d-flex gap-2">
                <img src="img/icon-umberella.png">
                <span>20%</span>
                </div>
                <div class="d-flex gap-2">
                  <img src="img/icon-wind.png">
      
                  <span>18Km/h</span>
                </div>
                <div class="d-flex gap-2">
                  <img src="img/icon-compass.png">
                  <span>East</span>
              </div>
            </div>
          </div>
          `;
      document.getElementById("weatherToday").innerHTML = box4;
    }
    getToday();

    function getTomorrow() {
      let box5 = ``;
      let day = days[new Date(apiResult.forecast.forecastday[1].date).getDay()];
      let month =
        months[new Date(apiResult.forecast.forecastday[1].date).getMonth()];
      box5 += `<div class="weather-date d-flex justify-content-between p-2">
          <div>${day}</div>
          <div>${
            new Date(apiResult.forecast.forecastday[1].date).getDate() + month
          }</div>
        </div>
        <div class="weather-statuts d-flex flex-column align-items-center p-5">
            <div class="weather-icon"><img src="${
              apiResult.forecast.forecastday[1].day.condition.icon
            }"></div>
            <div class="weather-temperature">${
              apiResult.forecast.forecastday[1].day.maxtemp_c
            }<sup>o</sup>C</div>
            <div>${
              apiResult.forecast.forecastday[1].day.mintemp_c
            }<sup>o</sup></div>
            <div class="weather-statut my-4">${
              apiResult.forecast.forecastday[1].day.condition.text
            }</div>
        </div>
          `;
      document.getElementById("weatherTomorrow").innerHTML = box5;
    }
    getTomorrow();
    function getAfterTomorrow() {
      let box6 = ``;
      let day = days[new Date(apiResult.forecast.forecastday[2].date).getDay()];
      let month =
        months[new Date(apiResult.forecast.forecastday[2].date).getMonth()];
      box6 += `<div class="weather-date d-flex justify-content-between p-2">
          <div>${day}</div>
          <div>${
            new Date(apiResult.forecast.forecastday[2].date).getDate() + month
          }</div>
        </div>
        <div class="weather-statuts d-flex flex-column align-items-center p-5">
            <div class="weather-icon"><img src="${
              apiResult.forecast.forecastday[2].day.condition.icon
            }"></div>
            <div class="weather-temperature">${
              apiResult.forecast.forecastday[2].day.maxtemp_c
            }<sup>o</sup>C</div>
            <div>${
              apiResult.forecast.forecastday[2].day.mintemp_c
            }<sup>o</sup></div>
            <div class="weather-statut my-4">${
              apiResult.forecast.forecastday[2].day.condition.text
            }</div>
        </div>
          `;
      document.getElementById("weatherAfterTomorrow").innerHTML = box6;
    }
    getAfterTomorrow();
  };

  const errorCallback = (error) => {
    console.log(error);
  };

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  ///////////////////////////////////////
}
tst();
///////////////////
