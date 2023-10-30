import './App.css'
import PropTypes from 'prop-types'
// import { Greeting } from './greeting'

function List(props) {
  // Ternary only
  return ( <>
  {!props.numbers ? (<div>Loading..</div>)
  : props.numbers.length > 0 ?  (
    <ul>
      {props.numbers.map((number, index) => (
        <li key={index}>{number}</li>
      ))}
    </ul>
  ) : (
    <div>No numbers provided</div>
  )}
  </> )
}
List.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number),
}


function App() {
  const numbers = [...Array(12).keys()]
  return (
    // Multiple elements
    <div>
      <h1>Numbers!</h1>
      <List numbers={numbers} />
    </div>
  )
}

export default App
