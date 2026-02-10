console.log("Hello, Backtalk!");

let myVariable = 4;

let expression = (2 + 6) * 4;


// This is a comment

/** 
 * variables
 * 1. Create four variables that contain numbers. Call the variables something sensible.
 * 2. Add the first two variables together and store the result in another variable.
 * 3. Subtract the fourth variable from the third and store the result in another variable.This is a multi-line comment
 
 * Final result should be 4633.33
 * Multiply result and result2 and assign the result back to result (use shorthand operator)
 * Format result so that it has two decimal places and store it in a variable called finalResult
 * Check the data type of finalResult using typeof. If it's a string, convert it to a number type and store the result in a variable called finalNumber.
 * 
let result = 7 + 13 / 9 + 7;
let result2 = (100 / 2) * 6;
 */

/**
 * string object
 * string literal 
 * using quotes in strings '""' or '\''
 * template literal - const name = "Chris"; const greeting = `Hello, ${name}`;
 - concatenation 
 - including expressions 
 - multi-line strings
 - number vs string data types


 const quote = "I do not like green eggs and ham. I do not like them, Sam-I-Am.";
 const substring = "green eggs and ham";

length
includes() 
startswith() 
endswith() 
toLowerCase()
toUpperCase()
indexOf()  
 
 */


if (true) console.log("teyeye");

if (false) { /** code */ }

if (condition) { /** code  */ }
else { /** code to do something else */ }

if(condition1) {}
else if (condition2) {}
else {}

const myFirstResult  = condition  ? "First value." : "Second value.";
// const myFirstResult  = true  ? "First value." : "Second value.";



// nested if statements
if (condition) {
  if (condition) {
    // code
  } else if (condition) {
    // code
  }
}

let myVariable;
switch ( true ) {
  case true: {
    let myVariable = "True.";
    break;
  }
  default: {
    let myVariable = "False.";
    break;
  }
}

switch (20) {
    case 5:
    console.log( "The value was five." );
    break;
  case 10:
    console.log( "The value was ten." );
    break;
  default:
    console.log( "The value was something unexpected." );
}

// simple if else task 
let season = "summer";
let response;

if (season === "summer") {
  response = "It's probably nice and warm where you are; enjoy the sun!";
} else if (season === "winter") {
  response = "I hope you are not too cold. Put some warm clothes on!";
} else {
  response =
    "I don't know what the season is where you are. Hope you are well.";
}



initializer
while (condition) {
  // code to run

  final-expression
}

// while example 
let randomize = () => Math.floor( Math.random() * 10 );
let randomNum = randomize();
while( randomNum !== 3 ){
  console.log( `The number is not ${ randomNum }.` );
  randomNum = randomize();
}
console.log( `The correct number, ${ randomNum }, was found.` );

let iterationCount = 0;
while( iterationCount <= 5 ) {
  iterationCount++;
  if( iterationCount === 3 ) {
    continue;
  }
  console.log( `Loop ${ iterationCount }.` );
}
console.log( "Loop ended." );

let iterationCount = 1;
while( iterationCount <= 5 ) {
  if( iterationCount === 3 ) {
    console.log(`Iteration skipped.``);`
    break;
  }
  console.log( `Loop ${ iterationCount }.` );
  iterationCount++;
}
console.log( "Loop ended." );

for (initializer; condition; final-expression) {
  // code to run
}

const myIterable = [ true, false, true ];
for( const myElement of myIterable ) {
  console.log( myElement );
}


const myObject = { "myProperty" : true, "mySecondProperty" : false };
for( const myKey in myObject ) {
  console.log( myKey );
}

// loop task 
const name = "Mustafa";
const para = document.createElement("p");

const phonebook = [
  { name: "Chris", number: "1549" },
  { name: "Li Kang", number: "9634" },
  { name: "Anne", number: "9065" },
  { name: "Francesca", number: "3001" },
  { name: "Mustafa", number: "6888" },
  { name: "Tina", number: "4312" },
  { name: "Bert", number: "7780" },
  { name: "Jada", number: "2282" },
];

const section = document.querySelector("section");
section.appendChild(para);

/** 
 * 
 * 
 * To complete the task:

    Write a loop that iterates through the (phonebook) array and searches for the provided name. You should use a type of loop that you've not used in the previous task.
    If the name is found, write it and the associated number into the textContent of the provided paragraph (para), in the form "<name>'s number is <number>." After that, exit the loop before it has run its course.
    If none of the objects contain the name, print "Name not found in the phonebook" into the textContent of the provided paragraph.

 */
// read about object.keys(), object.values(), and object.entries() methods for iterating over objects in more detail.

// functions

function functionName(parameters) {
    // block statement or function body
    return; // optional return statement
}

/** 
 * show the following; 
 * declaring a function
 * invoking a function
 * parameters vs arguments
 * default parameters 
 * expressing a function
 * arrow function expression
 * function scope 
 * the return keyword
*/


// default parameter 
function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}

hello("Ari"); // Hello Ari!
hello(); // Hello Chris!

const myVariable1 = () => { /** function body*/ }

// code encountered after return does not execute
const myFunction = function() {
   return true;
   console.log( "This is a string." );
}

// short circuiting
function myFunction( myString ) {
   if( typeof myString !== "string" ) {
    return false;
   }
   if( myString.length >= 5 ) {
    return true;
   } else {
    return false;
   }
}

myFunction( 100 );


myFunction( "St" );


myFunction( "String." );

/**
 * 
 * Define a function—chooseName()—that prints a random name from the provided array (names) into the provided paragraph (para).
 * Call the chooseName() function once.
 */

const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.querySelector("p");

function chooseName() {
  const randomNumber = Math.floor(Math.random() * names.length);
  const choice = names[randomNumber];
  para.textContent = choice;
}

chooseName();

const shortNames = names.filter((name) => name.length < 5);
para.textContent = shortNames;









