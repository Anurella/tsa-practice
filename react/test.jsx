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
