import "./App.css";
import Tours from "./Components/Tours";
// import Card from "./Components/Card";
import "./data";
import data from "./data";
import { useState } from "react";



function App() {  
  
  const [tours,setTours] = useState(data);

  
  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0){
    return (
      <div className=" w-[100vw] h-[100vh] flex justify-center items-center flex-col gap-3">
        <h1 className="font-semibold text-2xl">Sorry 😣😣.....</h1>
        <p className="font-semibold text-2xl">No More Tours Left</p>
        <button className="py-1 px-16 bg-gray-200 font-semibold text-2xl rounded-lg" onClick={() =>{setTours(data)}}>
          Refresh
        </button>

      </div>
    )
  }


  return (

    <div className="App">
      <Tours tours = {tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
