import { useState } from "react";
function App() {
  let [color, setColor] = useState("#D8AE7E");
  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="h-screen flex justify-center items-center">
      <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
        <p className="text-center text-lg font-bold">Backgorund Changer!</p>
      </div>
    </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}} onClick={()=> setColor("black")}>black</button>

          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"white"}} onClick={()=> setColor("white")}>white</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}} onClick={()=> setColor("green")}>green</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}} onClick={()=> setColor("blue")}>blue</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}} onClick={()=> setColor("purple")}>purple</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}} onClick={()=> setColor("orange")}>orange</button>
        </div>
      </div>
    </div>
  );
}

export default App;
