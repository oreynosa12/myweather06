let weather = "db61d99869c29302a76214785fc276c2";

function currentWeather(city) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${weather}`
  )
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      //   console.log(data);
      $("#current  h3").text(`Weather in ${data.name}`);
      $("#current .temp").text(`Temperature: ${data.main.temp} degrees`);
      $("#current .description").text(`${data.weather[0].description}`);
      $("#current .humidity").text(`Humidity: ${data.main.humidity}`);
      $("#current .wind").text(`Wind speed: ${data.wind.speed}mph`);
      var img = $("<img>");
      img.attr(
        "src",
        "https://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png"
      );
      $("#current .weather").append(img);
      fiveForecast(city);
    });
}

function fiveForecast(cities) {
  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${cities}&units=imperial&appid=${weather}`
  )
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      console.log(data.list);

      for (let i = 0; i < data.list.length; i += 8) {
        var currentDay = i / 8 + 1;
        $("#" + currentDay + " .h3").text(`5 Day Forecast ${data.city.name}`);
        $("#" + currentDay + " .temp").text(
          `Temperatures: ${data.list[i].main.temp} degrees`
        );
        $("#" + currentDay + " .description").text(
          `${data.list[i].weather[0].description}`
        );
        $("#" + currentDay + " .humidity").text(
          `Humidity: ${data.list[i].main.humidity}`
        );
        $("#" + currentDay + " .wind").text(
          `Wind speed: ${data.list[i].wind.speed}mph`
        );
        var img = $("<img>");
        img.attr(
          "src",
          "https://api.openweathermap.org/img/w/" +
            data.list[i].weather[0].icon +
            ".png"
        );
        $("#" + currentDay + " .weather").append(img);
      }

      
    });
}

$("#search").click(function () {
  var city = $("#city").val();
  console.log(city);
  currentWeather(city);
});