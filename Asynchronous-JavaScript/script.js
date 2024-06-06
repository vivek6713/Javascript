// Old Way To AJAX Call: XMLHttpRequest
const countriesContainer = document.querySelector(".countries");

function renderHtml(data) {
  const html = `
  <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}M people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
}
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     // console.log(data);

//     renderHtml(data)
//   });
// };
// getCountryData('Republic of India');

//========== Call API with Fetch method==============//
// const countryData = function(country) {
//     // this will return a promise
//     fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       if(!response.ok) throw new Error('country not found') // throw error will handle in catch
//       return response.json()
//     }) // it will also return promise
//     .then(data => renderHtml(data[0]))
//     .catch(error => console.log(error.message))
//     .finally(()=>console.log('finally block'));
// }

// countryData('bbaqss');

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474
*/

// const whereAmI = function(lat, long) {
//   fetch(`https://geocode.xyz/${lat},${long}?geoit=json`)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error.message))
// }
// whereAmI(52.508, 13.381);

///////////////////////////////////////
// The Event Loop in Practice

/*
  here first print top level or out of block code which is log start and end
  after that resolve promise is print becuase promise callback has high priority
  and at the end timer function is printed
*/
// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 1000; i++) {}
//   console.log(res);
// });

// console.log('Test end');

// ===============================Creating Own Promise=========================== //

// const MyPromis = new Promise(function(resolve, reject){
//   if(1 === 1) {
//     resolve('value is same');
//   } else {
//     reject('value is different');
//   }
// });

// // consume promise
// MyPromis.then(res => console.log(res)).catch(err => console.log(err));

// Async &&& Await
const whereAmI = async function (country) {
  try {
    const countryData = await fetch(
      `https://restcountries.com/v2/name/${country}`
    );
    if (!countryData.ok) throw new Error("failded to fetch");
    // return countryData.json();
    const [data] = await countryData.json();
    console.log(data);
    // return `My country name is ${data.name}`;
  } catch (err) {
    console.error(err);
  }
};

// (async function(){
//   const data = await whereAmI("Bharat Ganrajya");
//   console.log(data);
// })();

const getPlaceByZipCode = async function (code, zcode) {
  try {
    const countryData = await fetch(
      `http://api.zippopotam.us/${code}/${zcode}`
    );
    if (!countryData.ok) throw new Error("failded to fetch");
    return countryData.json();
  } catch (err) {
    console.error(err);
  }
};

// Run Promise Parallel
const places = async function () {
  try {
    const [data1, data2, data3] = await Promise.all([
      getPlaceByZipCode("IN", "110001 "),
      getPlaceByZipCode("AR", "1601"),
      getPlaceByZipCode("AT", "1010"),
    ]);
    console.log(data1, data2, data3);
  } catch (err) {
    console.log(err);
  }
};
// places();

// Promise.race => whatever promise is setteled first is returned
const timeout = function (sec) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(new Error("Request time out!"));
    }, sec * 1000);
  });
};

Promise.race([
  getPlaceByZipCode("IN", "110001"),
  getPlaceByZipCode("AR", "1601"),
  getPlaceByZipCode("AT", "1010"),
])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// difference between all and allsettled all will return reject promise if any and allsettled will simply return all resolve promise either it fullfilled or reject

Promise.all([
  Promise.resolve("success"),
  Promise.reject("error"),
  Promise.resolve("success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
// Allsettled combinator
Promise.allSettled([
  Promise.resolve("success"),
  Promise.reject("error"),
  Promise.resolve("success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Any combinator
// any is similar to race, Difference is any return fullfilled promise only untill all are reject
Promise.any([
  Promise.resolve("success"),
  Promise.reject("error"),
  Promise.resolve("success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
