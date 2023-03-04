
fetch(api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={db61d99869c29302a76214785fc276c2}
  
  .then(function (data) {
    return data.json();
  })
  .then(function (data) {
    console.log(data);
  });
