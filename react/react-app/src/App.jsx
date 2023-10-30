import './App.css'
import PropTypes from 'prop-types'
import React from 'react'
// import { Greeting } from './greeting'

function List(props) {
  if (!props.numbers) {
    return <div>Loading...</div>;
  }

  if (props.numbers.length === 0) {
    return <div>No numbers</div>;
  }

  return (
    <ul>
      {props.numbers.map((number) => (
        <li key={number}>{number}</li>
      ))}
    </ul>
  );
}
List.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number),
}


function App() {
  // const numbers = [...Array(200).keys()]
  const [numbers, setNumbers] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      setNumbers([...Array(200).keys()]);
    }, 3000);
  }, []);
  return (
    // Multiple elements
    <div>
      <h1>Numbers!</h1>
      <List numbers={numbers} />
    </div>
  )
}

export default App
