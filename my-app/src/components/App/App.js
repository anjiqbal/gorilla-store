import './App.css';
import { useEffect, useState } from "react";
import getStoreData from "./storeData";

function App() {

  const [myStoreData, setMyStoreData] = useState(null)

  useEffect(() => {

    const fetchMyStoreData = async () => {
      const data = await getStoreData();
      setMyStoreData(data)
    }
    fetchMyStoreData();   
  },[])
  

  return (
    <div className="App">
    </div>
  );
}

export default App;
