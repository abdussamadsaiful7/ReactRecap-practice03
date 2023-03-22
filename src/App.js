import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <District name="Noakhali" specialty="Division"></District>
      <District name="Bi-Bariya" specialty="Jodda Akbar"></District>
      <District name="Cumilla" specialty="Moynamoti" ></District>
    </div>
  );
}

const districtStyle ={
  backgroundColor:'lightPink',
  margin: '20px',
  borderRadius: '10px',
  padding:'15px',
  
  
}

function District (props){
  const [power, setPower]=useState(1);
  const boostPower =() =>{
    const newPower = power*2;
    setPower(newPower);
  }
  return(
    <div style={districtStyle} className='district'>
      <h2>Name: {props.name} </h2>
      <p>Specialty: {props.specialty} </p>
      <h4>Power: {power} </h4>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  )
}

export default App;
