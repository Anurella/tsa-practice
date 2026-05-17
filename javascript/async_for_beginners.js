

/* Synchronous code runs line by line, top to bottom — each line waits for
the previous one to finish. Asynchronous code lets the browser keep going
while waiting for slow tasks (like fetching data from the internet). */


/* 
─── PART 1: setTimeout — the simplest async tool ──────
setTimeout(callback, delay) schedules a function to run AFTER a delay (ms).
The rest of your code keeps running in the meantime. 
*/

console.log("1. Script starts");

setTimeout(() => {
  console.log("3. This ran after 2 seconds");
}, 2000);

console.log("2. Script keeps going while the timer counts down");

/* 
Expected output order:
  1. Script starts
  2. Script keeps going while the timer counts down
  3. This ran after 2 seconds   ← appears 2 seconds later
  */


// ─── PART 2: Callbacks ─────
//
// A callback is a function you hand to another function so it can be called
// later, once some work is done. setTimeout above used a callback.
// Here's a custom example to make the idea concrete:

function doAfterDelay(message, delayMs, callback) {
  setTimeout(() => {
    callback(message);
  }, delayMs);
}

doAfterDelay("Hello from callback!", 1000, (msg) => {
  console.log(msg); // prints 1 second later
});

// Callbacks work, but chaining several of them creates deeply nested code
// (sometimes called "callback hell"). Promises solve that problem.



// ─── PART 3: Promises ────────

/* 
A Promise represents a value that isn't ready yet. It can be:
  - pending   → still waiting
  - fulfilled → succeeded, result is available
  - rejected  → something went wrong

.then()  runs when the promise fulfills (succeeds).
.catch() runs when the promise rejects (fails). */

// Creating a promise manually (to show the pattern):
function waitThenGreet(name) {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject("No name provided!"); // signals failure
      return;
    }
    setTimeout(() => {
      resolve(`Hi, ${name}!`); // signals success after 1.5 s
    }, 1500);
  });
}

waitThenGreet("Alex")
  .then((greeting) => {
    console.log(greeting); // "Hi, Alex!" — prints after 1.5 s
  })
  .catch((error) => {
    console.error("Error:", error);
  });



// ─── PART 4: Chaining .then() calls ──────────────
//
// Instead of nesting callbacks, you can chain .then() calls.
// Each .then() receives the return value of the previous one.

const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

fetchPromise
  .then((response) => {
    // Step 1 — check the response was OK, then parse JSON
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json(); // returns another promise
  })
  .then((data) => {
    // Step 2 — we now have the parsed data
    console.log("First product:", data[0].name);
  })
  .catch((error) => {
    // Any error in the chain lands here
    console.error("Could not get products:", error);
  });

// Notice: the log below prints BEFORE the product name, because fetch() is
// asynchronous — the code doesn't pause and wait for it.
console.log("Fetching products… (this prints first!)");



// ─── PART 5: async / await ──────────────────────
//
// async/await is built on top of Promises but reads like normal, step-by-step
// code. It's the modern, recommended way to write async JavaScript.
//
// Rules:
//   - Mark a function with `async` to use `await` inside it.
//   - `await` pauses ONLY inside that function, not the whole program.
//   - Wrap in try/catch to handle errors.

async function fetchProducts() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Third product (async/await):", data[2].name);
    return data;
  } catch (error) {
    console.error("Could not get products:", error);
  }
}

// Calling an async function always returns a Promise.
// You can chain .then() on it if you need the result elsewhere.
fetchProducts().then((data) => {
  if (data) console.log("Total products fetched:", data.length);
});



// ─── PART 6: Putting it all together — a real-world example ──────────────────
//
// Simulates a loading delay with setTimeout, then fetches real data.

async function showProductAfterDelay() {
  console.log("Starting… please wait 1 second.");

  // Pretend we're doing some setup work that takes 1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("Setup done! Now fetching a product…");

  try {
    const response = await fetch("https://fakestoreapi.com/products/1");
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    const product = await response.json();
    console.log("Product name:", product.title);
    console.log("Price: $" + product.price);
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}

showProductAfterDelay();
