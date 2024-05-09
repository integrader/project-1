import { useState } from 'react'



function App() {
  const [color, setColor] = useState("grey")

  return (
    <>
      <div className='w-full h-screen ' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center  	 bottom-12 inset-x-0	 mx-20 rounded-3xl  px-2'>
          <div className='flex flex-wrap justify-center py-2 px-3 gap-3 bg-white  rounded-3xl '>
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
          <button
          onClick={() => setColor("brown")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "brown"}}
          >Brown</button>
          <button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "yellow"}}
          >Yellow</button>
          <button
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "pink"}}
          >Pink</button>

          </div>
        </div>
      </div>
    
    
    </>
  )
}

export default App
