



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
myName = "Chris";


let myAge = 42;

// Don't edit the code below here!
para1.textContent = myName;
para2.textContent = `In 20 years, I will be ${myAge + 20}`;
section1.appendChild(para1);
section1.appendChild(para2);


 
// code for practice 2 
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

const quoteEnd = "but by the seeds that you plant.";


const finalQuote = quoteStart + quoteEnd; 
// cosnt finalQuote = `${quoteStart}${quoteEnd}`




// Add your code here

// Don't edit the code below here!
para5.textContent = finalQuote;
section3.appendChild(para5); 


// code for practice 4
const para6 = document.querySelector(".score");
const para7 = document.querySelector(".response");
const switchButton = document.querySelector(".switch");

let machineActive = false;
let response;
let random = () => Math.floor( Math.random() * 100 ) + 1;
let score = 45;

// Add your code here



// Don't edit the code below here!
switchButton.addEventListener("click", () => {
  machineActive = !machineActive;
  score = machineActive ? random() : 0;
// add your code here


  // do not edit
para6.textContent = score;
para7.textContent = response;
  switchButton.textContent = machineActive ? "Machine is on" : "Machine is off";
});



 // code for practice 5

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



/**
// code for practice 6

let i = 500;
const para9 = document.createElement("p");

// Don't edit the code above here!

// Add your code here

// Don't edit the code below here!

section.appendChild(para9);


 */


/**
 * 
 - Create three variables that hold references to the list (<ul>), <input>, and <button> elements.
 - Create a function that will run in response to the button being clicked.
 - Inside the function body, start by calling preventDefault(). Since the input is wrapped in a form element, 
 pressing the Enter key will trigger the form to submit. The call to preventDefault() will prevent the form from refreshing the page so a new item can be added to the list instead.
 - Continue by storing the current value of the input in a variable.
 - Next, clear the input element by setting its value to an empty string ("").
 - Create three new elements — a list item (<li>), a <span>, and a <button> — and store them in variables.
 - Append the span and button as children of the list item.
 - Set the text content of the span to the input value you saved earlier, and set the text content of the button to Delete.
 - Append the list item to the list.
 - Attach an event handler to the Delete button so that, when clicked, it removes the entire list item (<li>...</li>).
 - Finally, use the focus() method to focus the input element, so it's ready for entering the next shopping list item.
 */

 const list = document.querySelector("ul");
 const input = document.querySelector("input");
 const button = document.querySelector(".addItem");

button.addEventListener("click", (event) => {
  event.preventDefault();

  //  this is getting the value of the input
  let listOption = input.value; 
  input.value = "";

  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const listBtn = document.createElement("button");

  
  if(listOption) {
    listItem.appendChild(listText);
    listText.textContent = listOption;
    listItem.appendChild(listBtn);
    listBtn.textContent = "Delete";
    list.appendChild(listItem);
  }

  listBtn.addEventListener("click", () => {
    listItem.remove()
    // list.removeChild(listItem);
  })
  
   input.focus();

})


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


const element = document.createElement(h1)

