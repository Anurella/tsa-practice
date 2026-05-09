// do not edit this code!
const section1 = document.querySelector(".test1");
const section2 = document.querySelector(".test2");
const section3 = document.querySelector(".test3");
const section4 = document.querySelector(".test4");
const section = document.querySelector(".test6");

const para1 = document.createElement("p");
const para2 = document.createElement("p");
const para3 = document.createElement("p");
const para4 = document.createElement("p");
const para5 = document.createElement("p");
const para8 = document.querySelector(".test5 p");
// do not edit the code above here!

  
// code for practice 1 
// Fix the following code

let myName = "Default";

let myAge = 42;

// Don't edit the code below here!
para1.textContent = myName;
para2.textContent = `In 20 years, I will be ${myAge + 20}`;
section1.appendChild(para1);
section1.appendChild(para2);


 
// code for numbers and operators practice
// insert your code here

// bodmas - brackets, order, division, multiplication, addition, subtraction
let result = (7 + 13 / 9) + 7;
let result2 = 100 / 2 * 6;

result = result * result;
result *= result2;


// to make a number to decimal place use .toFixed(2)
const finalResult = result.toFixed(2);

const finalNumber = Number(finalResult);


// Don't edit the code below here!
para3.textContent = `Your finalResult is ${finalResult}`;
const finalNumberCheck =
  isNaN(finalNumber) === false
    ? "finalNumber is a number type. Well done!"
    : `Oops! finalNumber is not a number.`;
para4.textContent = finalNumberCheck;
section2.appendChild(para3);
section2.appendChild(para4); 


// code for practice 3
const quoteStart = 'Don\'t judge each day by the harvest you reap';

// Add your code here

// Don't edit the code below here!
para5.textContent = finalQuote;
section3.appendChild(para5); 


 // code for functions practice 
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
// Don't edit the code above here!

// Update the code below here

function isShort(name) {
  return name.length < 5;
}

const shortNames = names.filter((name) => name.length < 5);
para8.textContent = shortNames;


// code for loops practice 

let i = 500;
const para9 = document.createElement("p");
// Don't edit the code above here!

// Add your code here

// Don't edit the code below here!
section.appendChild(para9);