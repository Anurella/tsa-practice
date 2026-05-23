// practice jsx 
export default function TodoList() {
  return ( 
  <>
      <h1 class="blue">Hedy Lamarr's Todos</h1>
      <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" class="photo" />
      <ul>
          <li>Invent new traffic lights </li>
          <li>Rehearse a movie scene </li>
          <li>Improve the spectrum technology </li>
      </ul>
   </>
  );
}


// The export default prefix is a standard JavaScript syntax (not specific to React). It lets you mark the 
// main function in a file so that you can later import it from other files.


export default function Greeting({name, language, ...extraProps}) {
  return (
    <>
    <section></section>
      <GreetingHeader name={name} />
      <GreetingParagraph language={language} />
      <h1> {...extraProps}</h1>
    </>
  )
}

// create a greeting header 
function GreetingHeader({name}) {
  return <h1>Hello {name}.</h1>;
}

// create a greeting paragraph
function GreetingParagraph({language}) {
  return <p>You are programming in {language}.</p>;
}



// function Greeting({name, language}) {
//    return (
//       <div>
//          <h1>Hello {name}.</h1>
//          <p>You are programming in {language}.</p>
//       </div>
//    );
// }

// const element = (
//    <div>
//       <Greeting name="Dennis" language="JavaScript" />
//       <Greeting name="Ada" language="Python" />
//    </div>
// );

// let us create our first app 


/* spread operator
the spread operator allows us to take an object and spread its properties into another object. 
in this case, we are taking the extraProps object and spreading its properties into the h1 element. 
this allows us to pass any additional props to the h1 element without having to specify them explicitly. */

/* 
rest operator 
the rest operator allows us to take the remaining properties of an object and put them into a new object. 
we are using the rest operator to collect those props into a new object called extraProps. 
this allows us to pass any additional props to the Greeting component without having to specify them explicitly. 
the rest operator is useful when we want to pass a variable number of props to a component, or when we want to pass props that we don't know in advance.
*/

/* 
 destructuring assignment
 the destructuring assignment syntax allows us to unpack values from arrays, or properties from objects, into distinct variables. 
 in this case, we are using destructuring assignment to extract the name and language props from the props object that is passed to the Greeting component. 
 this allows us to use those props directly in our component without having to access them through the props object. 
 destructuring assignment is a convenient way to extract values from objects and arrays, and it can make our code more concise and readable.
*/