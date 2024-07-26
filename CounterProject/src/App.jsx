import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [counter , setCounter] =useState(15)
//vari-controledby|this mathod 

//let counter =15

const addValue=()=>{
  // console.log("value added",Math.random());
  
  counter=counter+1;
  setCounter(counter =>Math.min(counter +1,30));
  if(counter>30){
    return 30;
  }
  console.log("clicked",counter);
}
const removeValue =()=>{
  // setCounter(counter-1);
  // if(counter<0){
  //    return 0;
  // }
  setCounter(counter => Math.max(counter - 1, 0));
  console.log("clicked",counter);
}
  return (
    <>
    <h1>Chai our viteReact</h1>
    <h2>Counter value:{counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br />

    <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
