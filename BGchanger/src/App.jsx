
import {useState} from "react"

function App() {
 const [color,setColor] =useState("white")
  return (
    
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor:color}}
    >

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center  gap-3 shado-lg bg-white px-3 py-2 rounded-3xl">
      <button
      onClick={()=>setColor("#D2649A")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"#D2649A"}}
        >Pink</button>

<button
     onClick={()=>setColor("#C738BD")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"#C738BD"}}
        >Purple</button>

<button
onClick={()=>setColor("#8E3E63")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"#8E3E63"}}
        >DarkPink</button>

<button
onClick={()=>setColor("#E49BFF")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"#E49BFF"}}
        >Levender</button>

<button
onClick={()=>setColor("#CAF4FF")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"#CAF4FF"}}
        >LiteBlue</button>

<button
onClick={()=>setColor("#5AB2FF")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"#5AB2FF"}}
        >Blue</button>
         </div>
    
      </div>
    </div>
  )
}

export default App
