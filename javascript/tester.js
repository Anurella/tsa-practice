// while (condition) {
 // code to run
  // final-expression
// }

// while example 
let randomize = () => Math.floor( Math.random() * 10 );

let randomNum = randomize();

// while ( randomNum !== 3 ) {
//   console.log( `The number is not ${ randomNum }.` );
//   randomNum = randomize();
// }


let counter = 0;
while ( counter <= 5 ) {
  counter++;
  if( counter === 4 ) {
    break;
  }
  console.log( `Loop + ${ counter }.` );
}

for(let i=0; i < 5; i++) {
  console.log( `For loop ${ i }.` );
}