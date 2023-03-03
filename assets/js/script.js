// fetch(api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={db61d99869c29302a76214785fc276c2})
// .then(function(data){
//     return(data.json())
// })

fetch(
  `https://api.tomtom.com/search/2/search/fuel%20depot.json?key=NqrO4nkUsqVudnvjKTmTAqREWXlkjdnv&lat=37.8085&lon=-122.4239&radius=10000`
)
  .then(function (data) {
    return data.json();
  })
  .then(function (data) {
    console.log(data);
  });
