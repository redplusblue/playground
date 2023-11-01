import './App.css'
import { useState } from 'react';
// import { Greeting } from './greeting'

// eslint-disable-next-line no-unused-vars
function Input({label, onChange}) {
  return (
    <div>
      <label>{label}</label>
      {" "}
      <input type="text" onChange={onChange} />
    </div>
  )
}
// eslint-disable-next-line no-unused-vars 
function Person() {
   const [person, setPerson] = useState({ fname: '', lname: '',age: 10 });

   const handleIncreaseAge = () =>{
      setPerson({ ...person, age: person.age + 1 });
      // we've called setPerson, surely person has updated?
   }

   const handleChangedFName = (event) => {
      setPerson({ ...person, fname: event.target.value });
   }

    const handleChangedLName = (event) => {
      setPerson({ ...person, lname: event.target.value });
    }
   return (
      <>
          <Input label="First Name" onChange={handleChangedFName} />
          <Input label="Last Name" onChange={handleChangedLName} />
         <h1>{person.fname + " " + person.lname}</h1>
         <h2>{person.age}</h2>
         <button onClick={handleIncreaseAge}>Increase age</button>
      </>
   )
} 

// eslint-disable-next-line no-unused-vars
function CustomInput() {
   const [value, setValue] = useState('');
   
   return (
      <input
         type="text"
         value={value}
         onChange={(event) => setValue(event.target.value)}
      />
   );
}

function App() {
    return (
          <Person />
    )
}

export default App
