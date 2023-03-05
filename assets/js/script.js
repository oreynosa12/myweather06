let weather = "db61d99869c29302a76214785fc276c2";

function currentWeather(city) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${weather}`
  )
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      console.log(data);
      $(".card h3").text(`Weather in ${data.name}`);
      $(".temp").text(`Temperature: ${data.main.temp} degrees`);
      $(".description").text(`${data.weather[0].description}`);
      $(".humidity").text(`Humidity: ${data.main.humidity}`);
      $(".wind").text(`Wind speed: ${data.wind.speed}mph`);
      var img = $("img");
      img.attr(
        "src",
        "https://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png"
      );
      $(".weather").append(img);
      forecast(city);
    });
}

function forecast(city) {
  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${weather}`
  )
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      console.log(data);
      // $(".card h3").text(`Weather in ${data.name}`);
      // $(".temp").text(`Temperature: ${data.main.temp} degrees`);
      // $(".description").text(`${data.weather[0].description}`);
      // $(".humidity").text(`Humidity: ${data.main.humidity}`);
      // $(".wind").text(`Wind speed: ${data.wind.speed}mph`);
      // var img = $("img");
      // img.attr(
      //   "src",
      //   "https://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png"
      // );
      // $(".weather").append(img);
    });
}

$("#search").click(function () {
  var city = $("#city").val();
  console.log(city);
  currentWeather(city);
});

// fetch("https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={db61d99869c29302a76214785fc276c2}")

//   .then(function (data) {
//     return data.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

//   displayWeather : function(data){
//     const {name} =data;
//     const {icon, description} = data.weather[0]
//     const {temp, humidity} = data.main;
//     const {speed } = data.wind
//     console.log (name, icon, description, temp, humidity, speed)
//     document.querySelector(city).innerText = "Weather in" + name;
//     document.querySelector("icon").src = https://api.openweathermap.org/img/wn/" + icon + .png;
//     document.querySelector(".description").innerText = description;
//     document.querySelector(".temp").innerText = temp + "farenheit"
//     document.querySelector(".wind").innerText = "Wind speed:"+"mi/h";
//     document.querySelector("weather").classList.remove
//     document.body.style.backgroundImage = "url('https://image.unsplash.com/1600x900/? + name +')"

//   }
//   api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// db61d99869c29302a76214785fc276c2
