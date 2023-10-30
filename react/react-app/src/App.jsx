import './App.css'
// import { Greeting } from './greeting'

function App() {
  const numbers = [...Array(20).keys()]
  const listItems = numbers.map((number) => <li>{number}</li>)
  return (
    // Multiple elements
    <div>
      <h1>Numbers!</h1>
      <ul>{listItems}</ul>
    </div>
  )
}

export default App
