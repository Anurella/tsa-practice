// json 
const parsedData = `{
    "name": "John Doe",
    "age": 30,
    "email": "",
    "children": [
        {
            "name": "Ada Doe",
            "age": 5
        },
        {
            "name": "Bob Doe",
            "age": 3
        }
    ]
}`;

let test = JSON.parse(parsedData);

const dataObject = "struffhfh"

// change a string to an object
console.log(JSON.parse(parsedData));

const data = {
    "name": "John Doe",
    "age": 30,
    "email": "",
}
// change an object to a string
console.log(JSON.stringify(data));

// practing asynchronous programming in js

/**
 * 
 * 
 * A callback is just a function that's passed into another function, 
 * with the expectation that the callback will be called at the appropriate time. 
 * 
 * Promise is best understood when it is settled. If a promise is settled, 
 * calling then() on it would get the callback executed right away. 
 * But one thing to take note of here is that the callback is NOT fired synchronously; rather, it's fired asynchronously, 
 * i.e it will be delayed for as long as the call stack is not free.
 */



/**
 * You might think that we've made a typo, in writing I will log... before the content of the data in the console, 
 * but this isn't a typo; it's the behavior of asynchronous operations.

Because the callback passed to then() fires asynchronously, 
it will wait until all synchronous tasks are completed in the entire script and the internal call stack is empty.

This is exactly what happens in the code below

    A promise is created and immediately resolved.
    After this, then() is called with an onFulfilled() callback.
    Because the promise is settled at this point, the given onFulfilled() callback is executed immediately albeit asynchronously,
     i.e the callback lines up in the task queue.
    Next, the console.log('I will log before the data is fetched') statement is executed. This completes execution of the main script, 
    leaving the call stack free to execute things lined up in the task queue.
    Our onFulfilled() callback is dequeued from the task queue and put on the call stack to be executed.
    This results in the statement console.log('data...') being executed.

Thus, we get the log sequence 'I will log before the data is fetched' followed by 'Hello'.
 */

// const fetchPromise = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
// );


  // the promise returned by response.json() is fulfilled with the result of parsing the body text as JSON.
// .then is queued as a microtask, and will be executed after the current task is completed and the call stack is empty.


const fetchPromise = fetch(
  "https://dog.ceo/api/breeds/image/random"
);

/*
fetchPromise.then((response) => {
  const jsonPromise = response.json();

  jsonPromise.then((data) => { 
    document.querySelector(".dog").src = data.message;
   });
}); */


// explains chaining 
fetchPromise
  .then((response) => response.json())
  .then((data) => {
     document.querySelector(".dog").src = data.message;
  })
  .catch((error) => {
    console.error(`Could not get dog image: ${error}`);
  });




async function fetchProducts() {


  const response = await fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  console.log(response);
  console.log("I will not log before the response is fetched");
  
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const data = await response.json();
  return data;


}



const promise = fetchProducts();
promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });


  const url = "https://dog.ceo/api/breeds/list/all"
  const url2 = "https://fakestoreapi.com/products"
  // Call `fetch()`, passing in the URL.

/* fetch(url2)
  // fetch() returns a promise. When we have received a response from the server,
  // the promise's `then()` handler is called with the response.
  .then((response) => {
    // Our handler throws an error if the request did not succeed.
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // Otherwise (if the response succeeded), our handler fetches the response
    // as json by calling response.json(), and immediately returns the promise
    // returned by `response.json()`.
    return response.json();
  })
  // When response.text() has succeeded, the `then()` handler is called with
  // the text, and we copy it into the `poemDisplay` box.
  .then((result) => {
    console.log(result);
  })
  // Catch any errors that might happen, and display a message
  // in the `poemDisplay` box.
  .catch((error) => {
    console.log(`Could not fetch verse: ${error}`);
  }); */

