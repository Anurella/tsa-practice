export default function Greeting({name, language, children}) {
  return (
    <>
      <GreetingHeader name={name}/> 
      <GreetingBody language={language}/>
      <div>
        {children}
      </div>
    </>
  )
}

// this is the heading
function GreetingHeader({name}) {
    return <h1> Your name is {name} </h1>
}

// this is the body
function GreetingBody({language}) {
    return <p> I speak {language}</p>
}