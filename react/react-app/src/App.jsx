import './App.css'
import PropTypes from 'prop-types'
// import { Greeting } from './greeting'

function ListItem(props) {
  return <li>{props.value}</li>
}
ListItem.propTypes = {
  value: PropTypes.number,
}

function NumberList(props) {
  const numbers = props.numbers
  const listItems = numbers.map((number) => (
    <ListItem key={number.toString()} value={number} />
  ))
  return <ul>{listItems}</ul>
}
NumberList.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number),
}

function App() {
  const numbers = [...Array(20).keys()]
  return (
    // Multiple elements
    <div>
      <h1>Numbers!</h1>
      <NumberList numbers={numbers} />
    </div>
  )
}

export default App
