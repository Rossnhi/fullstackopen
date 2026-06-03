import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  if (good + neutral + bad > 0) {
    return (
      <div>
        <h1>give feedback</h1>
        <Button text="good" onClick={() => setGood(good + 1)} />
        <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
        <Button text="bad" onClick={() => setBad(bad + 1)} />
        <Statistics goodCount={good} neutralCount={neutral} badCount={bad} />
      </div>
    )
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={() => setGood(good + 1)} />
      <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" onClick={() => setBad(bad + 1)} />
      <p>No feedback given</p>
    </div>
  )
  
}

const Button = ({ text , onClick}) => <button onClick = {onClick}>{text}</button>
const Statistics = ({goodCount, neutralCount, badCount}) => {
  let total = goodCount + neutralCount + badCount
  let avg = (goodCount - badCount) / total
  return (
  <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={goodCount} />
          <StatisticLine text="neutral" value={neutralCount} />
          <StatisticLine text="bad" value={badCount} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={avg} />
          <StatisticLine text="positive" value={goodCount / total * 100} />
        </tbody>
      </table>
  </>
  
  )
}

const StatisticLine = ({ text, value }) => <tr><td>{text} </td><td>{value}</td></tr>

export default App