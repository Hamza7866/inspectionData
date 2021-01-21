import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";
import Map from "./Map";

function App() {
  const [inspectionData, setinspectionData] = useState([]);
  const inputRef = useRef(null);

  const handerClick = () => {
    const inputValue = inputRef.current.value;
    getRestaurantData(inputValue);
    inputRef.current.value = "";
  };
  const getRestaurantData = async (query) => {
    const { data } = await axios.get(
      `https://data.cityofnewyork.us/resource/43nn-pn8j.json?zipcode=${query}`
    );

    setinspectionData(data);
  };

  useEffect(() => {
    getRestaurantData();
  }, []);

  return (
    <div className="top-Container">
      <Map inspectionData={inspectionData} />

      <div className="input-Container">
        <input type="text" placeholder="Enter Zip Code" ref={inputRef} />
        <button onClick={handerClick}>Search</button>
      </div>
    </div>
  );
}

export default App;
