import { useCallback, useState,useEffect,useRef } from 'react'

  import './App.css'

function App() {
  //useState hook
  const [length,setLength] =useState(8)
 const [numAlwd,setNumAlwd]=useState(false)
 const [charAlwd,setcharAlwd]=useState(false)
 const[pass,setpass]=useState("")

 //useRef hook
const passRef=useRef(null)
//useCallback hook
 const passGen= useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

if(numAlwd) str+="0123456789"
if(charAlwd) str+="!@#$%^&*-_+=[]{}~`"

for (let i = 1; i <= length; i++) {
 let char=Math.floor(Math.random()*str.length+1)
 pass += str.charAt(char) 

}
setpass(pass)
 },[length,numAlwd,charAlwd,setpass])

 const copyPassToClipB=useCallback(()=>{
  passRef.current?.select();
  passRef.current?.setSelectionRange(0,100);
  window.navigator.clipboard.writeText(pass)
 },[pass])

  //useEffect hook
 useEffect(()=>{
  passGen()
 },[length,numAlwd,charAlwd,passGen])
 
  return (
    
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-8 py-3 my-8  bg-gray-800 text-orange-500'>
    <h1 className='text-white text-center my-3 text-2xl line-clamp-[1]'>Password generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4  '>
      <input 
      type="text"
      value={pass}
      className='outline-none w-full py-1.5 px-2'
      placeholder='password'
      readOnly
      //refference
      ref={passRef}
      />
      <button 
      onClick={copyPassToClipB}
      className='bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 border border-blue-700 rounded'>copy

      </button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex item-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-poniter'
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label>Length:{length}</label>
      </div>
       <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={numAlwd}
        id="numberInput"
        onChange={()=>{
          setNumAlwd((prev)=>!prev);
         }}
        
        />
        <label htmlFor="numberInput">Numbers</label>

       </div>
       <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAlwd}
              id="characterInput"
              onChange={() => {
                  setcharAlwd((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
          </div>
    </div>
   </div>
  
  )
}

export default App
