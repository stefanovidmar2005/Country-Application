"use strict";

const COUNTRY_LIST = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Ant Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const BASE_URL = `https://restcountries.com/v3.1/`;
const cardsContainer = document.querySelector(".cards");

///////////////////////////////////////////////////////////////////
// AJAX METHOD
// const fetchData = (countryName) => {
//   const request = new XMLHttpRequest();

//   request.open("GET", `${BASE_URL}/${countryName}?fullText=true`);

//   request.send();

//   request.addEventListener("load", () => {
// data fetched from the server
//     let [fullRetrievedData] = JSON.parse(request.responseText);
// 1. Population of country & region of Country
//     const { region, population } = fullRetrievedData;
// 2. Language of country
//     const language = Object.values(fullRetrievedData.languages).pop();
// 3. Currency of country
//     const currency = Object.values(fullRetrievedData.currencies).pop().name;
// 4. Flag of country
//     const { png } = fullRetrievedData.flags;
// 5. Name of country
//     const { common } = fullRetrievedData.name;

// html
//     const html = `<div class="card">
// <img class="countryFlag" src="${png}" alt="" />
// <div class="card__content">
//   <div class="card__heading">
//     <h3 class="countryName">${common}</h3>
//     <h4 class="countryRegion">${region}</h4>
//     <div class="card__description">
//       🧑‍🤝‍🧑
//       <p>${String(population)} people</p>
//     </div>
//     <div class="card__description">
//       🗣️
//       <p>${language}</p>
//     </div>
//     <div class="card__description">
//       💰
//       <p>${currency}</p>
//     </div>
//   </div>
// </div>
// </div>`;
// return the html back to the page with the counties data
//     cardsContainer.insertAdjacentHTML("beforeend", html);
//   });
// };

// COUNTRY_LIST.forEach((country) => fetchData(country));

// FETCH FUNCTION with promises

const getCountryList = (countryName) => {
  // lets break it down into small explanations

  // 1. the fetch function takes a couple of arguments the first one being the url it will send a request to get the data from
  // 2. we are using the .then method and that takes a callback to be invoked when the promise is resolved.
  // 3. we are then using this response.json method which creates a new promise this json method allows us to get the data in the right format however since we created a new promise we have to call another .then and pass in a calback function to be invoked when the promise is resolved.
  // 4. and at last we logged the responsedata after its been converted into JSON to the console.

  // couple of things to keep in mind:
  // 1. the .then method is a method that can only be used on promises so its available on its namespace you can say
  // 2. the .json method is also a method avaliable on any response object returned from the prior fulfilled promise

  fetch(`${BASE_URL}name/${countryName}`)
    .then((response) =>
      response.json().then((responseData) => {
        const [data] = responseData;
        // 1. Population of country & region of Country
        const { region, population } = data;
        // 2. Language of country
        const language = Object.values(data.languages).pop();
        // 3. Currency of country
        const currency = Object.values(data.currencies).pop().name;
        // 4. Flag of country
        const { png } = data.flags;
        // 5. Name of country
        const { common } = data.name;
        const neighbour = data?.borders[0];
        const html = `
      <div class="card">
          <img class="countryFlag" src="${png}" alt="" />
        <div class="card__content">
          <div class="card__heading">
            <h3 class="countryName">${common}</h3>
            <h4 class="countryRegion">${region}</h4>
            <div class="card__description">
              🧑‍🤝‍🧑
              <p>${String(population)} people</p>
            </div>
            <div class="card__description">
              🗣️
              <p>${language}</p>
            </div>
            <div class="card__description">
              💰
              <p>${currency}</p>
            </div>
          </div>
        </div>
    </div>
`;
        // return the html back to the page with the counties data
        cardsContainer.insertAdjacentHTML("beforeend", html);

        return neighbour; // here we have to return the neigbourse in order for the next .then to be able to have acess to that value so we can re fetch the data for the neigbour country
      })
    )
    // this callback the paramater passed in is the promise that is returned from the previous callback
    .then((neighbour) =>
      fetch(`${BASE_URL}alpha/${neighbour}
  `)
    )
    .then((response) => response.json())
    .then((responseData) => {
      const [data] = responseData;
      // 1. Population of country & region of Country
      const { region, population } = data;
      // 2. Language of country
      const language = Object.values(data.languages).pop();
      // 3. Currency of country
      const currency = Object.values(data.currencies).pop().name;
      // 4. Flag of country
      const { png } = data.flags;
      // 5. Name of country
      const { common } = data.name;
      const html = `
      <div class="card card__neighbour">
          <img class="countryFlag" src="${png}" alt="" />
        <div class="card__content">
          <div class="card__heading">
            <h3 class="countryName">${common}</h3>
            <h4 class="countryRegion">${region}</h4>
            <div class="card__description">
              🧑‍🤝‍🧑
              <p>${String(population)} people</p>
            </div>
            <div class="card__description">
              🗣️
              <p>${language}</p>
            </div>
            <div class="card__description">
              💰
              <p>${currency}</p>
            </div>
          </div>
        </div>
    </div>
`;
      // return the html back to the page with the counties data
      cardsContainer.insertAdjacentHTML("beforeend", html);
    });
};

COUNTRY_LIST.forEach((country) => getCountryList(country));
