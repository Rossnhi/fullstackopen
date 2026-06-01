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
  }
  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts} />
      <Total exercises={course.parts.map(part => part.exercises)}/>
    </div>
  )
}

const Header = ({course}) => <h1>{course}</h1>
const Content = ({parts}) => {
  return (
    <>
      {/* {parts.map(part => <Part partname = {part.name} exercise = {part.exercises}/>)} */}
      <Part partname = {parts[0].name} exercise = {parts[0].exercises}/>
      <Part partname = {parts[1].name} exercise = {parts[1].exercises} />
      <Part partname = {parts[2].name} exercise = {parts[2].exercises} />
    </>
  )
}
const Total = ({exercises}) => <p>Number of exercises {exercises[0] + exercises[1] + exercises[2]}</p>
const Part = ({partname, exercise}) => <p> {partname} {exercise} </p>

export default App