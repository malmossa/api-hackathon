var countriesDropMenu = document.querySelector("#countries");
var countries;
var map;
var loading;

countriesDropMenu.addEventListener("change", function (event) {

  displayCountryInf(event.target.value)
})

function loadeCountreis() {

  fetch("https://restcountries.eu/rest/v2/all")
    .then(function (res) {
      // console.log(res.json());
      return res.json();
    })
    .then(function (data) {
      // console.log(data);
      initialize(data);
    })
    .catch(function (err) {
      console.log("Error: ", err)
    }
    )
}

function initialize(countryData) {

  countries = countryData;
  var options = `<option>United States of America</option>`;
  for (var i = 0; i < countries.length; i++) {
    if (countries[i].name === "United States of America")
      continue;
    options += `<option value="${countries[i].name}">${countries[i].name}</option>`
  }

  countriesDropMenu.innerHTML = options;
  displayCountryInf("United States of America");
  showPage()

}

function displayCountryInf(countryName) {

  var countryInfo = countries.find(function (country) {
    if (country.name === countryName) {
      return country;
    }
  })

  const capital = document.querySelector(".capital");
  if (countryInfo.capital === "") {
    capital.textContent = "not available";
  } else {
    capital.textContent = countryInfo.capital;
  }

  const areaCode = document.querySelector(".area-code");
  if (countryInfo.callingCodes[0] === "") {
    areaCode.textContent = "not available";
  } else {
    areaCode.textContent = `+ ${countryInfo.callingCodes[0]}`;
  }

  const population = document.querySelector(".population");
  if (countryInfo.population === "") {
    population.textContent = "not available";
  } else {
    population.textContent = countryInfo.population.toLocaleString();
  }

  const nativeName = document.querySelector(".nativeName");
  if (countryInfo.nativeName === "") {
    nativeName.textContent = "not available";
  } else {
    nativeName.textContent = countryInfo.nativeName;
  }

  const language = document.querySelector(".language");
  if (countryInfo.languages[0].name === "") {
    language.textContent = "not available";
  } else {
    language.textContent = countryInfo.languages[0].name;
  }

  const currency = document.querySelector(".currency");
  if (countryInfo.currencies[0].name === "") {
    currency.textContent = "not available";
  } else {
    currency.textContent = countryInfo.currencies[0].name;
  }

  const timeZone = document.querySelector(".timezone");
  if (countryInfo.timezones[0] === "") {
    timeZone.textContent = "not available";
  } else {
    timeZone.textContent = countryInfo.timezones[0];
  }

  const continent = document.querySelector(".continent");
  if (countryInfo.region === "") {
    continent.textContent = "not available";
  } else {
    continent.textContent = countryInfo.region;
  }

  const subregion = document.querySelector(".subregion");
  if (countryInfo.subregion === "") {
    subregion.textContent = "not available";
  } else {
    subregion.textContent = countryInfo.subregion;
  }

  const location = document.querySelector(".location");
  if (countryInfo.latlng[0] === "" || countryInfo.latlng[1] === "") {
    location.textContent = "not available";
  } else {
    location.textContent = `lat: ${Math.floor(countryInfo.latlng[0])}  lng: ${Math.floor(countryInfo.latlng[1])}`;
  }

  const alpha3Code = document.querySelector(".alpha3Code");
  if (countryInfo.alpha3Code === "") {
    alpha3Code.textContent = "not available";
  } else {
    alpha3Code.textContent = countryInfo.alpha3Code;
  }

  const size = document.querySelector(".size");
  if (countryInfo.area === "") {
    size.textContent = "not available";
  } else {
    size.textContent = `${countryInfo.area.toLocaleString()} Km`;
  }

  const flag = document.querySelector(".flag");
  if (countryInfo.flag === "") {
    flag.textContent = "not available";
  } else {
    flag.innerHTML = `<img src="${countryInfo.flag}" height="150" width="200">`;
  }


  function countryZoom() {
    if (countryInfo.area > 660000) {
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

loadeCountreis()
