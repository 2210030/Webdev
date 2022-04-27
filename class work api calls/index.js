
//  promises
// .then()
// 1.async await.. 2. dot then(.then) -->two ways of handling promises.

//  axios / fetch -->possible ways to make an api calls.
const url = 'https://restcountries.com/v2/all';

// console.log('API..')
// task display the country names in api

// 3 states of promises are:
//  pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

async function getAllCountriesFromApi () {

    const response =  await fetch(url);

     const data = await response.json(); // response -> 200,400,401
	  //console.log(response);
	  console.log(data);
	}
	
getAllCountriesFromApi();