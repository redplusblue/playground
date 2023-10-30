import './App.css'
import PropTypes from 'prop-types'
// import { Greeting } from './greeting'

// Even Numbers only
function NumberList(props) {
  const numbers = props.numbers
  const listItems = numbers.map((number) => {
    return number % 2 == 0 ? <li key={number.toString()}>{number}</li> : null
  })
  return <ul>{listItems}</ul>
}
NumberList.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number),
}


function App() {
  const numbers = [...Array(200).keys()]
  return (
    // Multiple elements
    <div>
      <h1>Numbers!</h1>
      <NumberList numbers={numbers} />
    </div>
  )
}

export default App
