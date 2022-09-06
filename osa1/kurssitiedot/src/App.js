const Header = (props) => {

  return (

    <>
      <h1>{props.name}</h1>
    </>
    
  );

}

const Part = (props) => {

  return (

    <>
      <p>{props.partName} {props.exercises}</p>
    </>

  );

}

const Content = (props) => {

  return (
    <>
      <Part partName={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part partName={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part partName={props.parts[2].name} exercises={props.parts[2].exercises} />
    </>
  );
}

const Total = (props) => {

  let tot = 0;
  for(let i = 0; i < props.parts.length; i++) {
    tot += props.parts[i].exercises;
  }

  return(
    <>
      <p>Number of exercises: {tot}</p>
    </>
  );

}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }

    ]
  };

  return (
    <div>
      <Header name={course.name} />
      
      <Content parts={course.parts} />

      <Total parts={course.parts} />
    </div>
  )
}

export default App;
