var countriesDropMenu = document.querySelector("#countries");
var countries;
var map;

countriesDropMenu.addEventListener("change", function (event) {

  displayCountryInf(event.target.value)
})

fetch("https://restcountries.eu/rest/v2/all")
  .then(function(res) {
    // console.log(res.json());
    return res.json();
  })
  .then(function(data) {
    // console.log(data);
    initialize(data);
  })
  .catch(function(err) {
    console.log("Error: ", err)
  }
  )

function initialize(countryData) {
  countries = countryData;
  var options = "";
  for ( var i = 0; i < countries.length; i ++ ) {
    options += `<option value="${countries[i].name}">${countries[i].name}</option>`
  }
  countriesDropMenu.innerHTML = options;
  displayCountryInf("United States of America");
}

function displayCountryInf(countryName) {

  var countryInfo = countries.find(function (country) {
    if (country.name === countryName) {
      return country;
    }
  })

  document.querySelector(".capital").textContent = countryInfo.capital;
  document.querySelector(".area-code").textContent = `+ ${countryInfo.callingCodes[0]}`;
  document.querySelector(".population").textContent = countryInfo.population.toLocaleString();
  document.querySelector(".nativeName").textContent = countryInfo.nativeName;
  document.querySelector(".language").textContent = countryInfo.languages[0].name;
  document.querySelector(".currency").textContent = countryInfo.currencies[0].name;
  document.querySelector(".timezone").textContent = countryInfo.timezones[0];
  document.querySelector(".continent").textContent = countryInfo.region;
  document.querySelector(".subregion").textContent = countryInfo.subregion;
  document.querySelector(".location").textContent = countryInfo.latlng;
  document.querySelector(".alpha3Code").textContent = countryInfo.alpha3Code;
  document.querySelector(".size").textContent = `${countryInfo.area.toLocaleString()} Km`;
  document.querySelector(".flag").innerHTML =`<img src="${countryInfo.flag}" height="150" width="200">`

  function countryZoom () {
    if (countryInfo.area > 660000 ) {
      return 4
    } else if (countryInfo.area < 3000) {
      return 8
    } else {
      return 7
    }
  }

  map = new google.maps.Map(document.querySelector(".map"), {
    center: {
      lat: countryInfo.latlng[0],
      lng: countryInfo.latlng[1]
    },
    zoom: countryZoom()
  });

}
