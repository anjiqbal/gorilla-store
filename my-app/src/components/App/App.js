import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import getStoreData from "./storeData";
import CardCollection from "./CardCollection";

function App() {
  const [myStoreData, setMyStoreData] = useState(null);

  useEffect(() => {
    const fetchMyStoreData = async () => {
      const data = await getStoreData();
      setMyStoreData(data);
    };
    fetchMyStoreData();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>store page</h1>
      </header>
      <main>
        <CardCollection/>
      </main>
    </div>
  );
}

export default App;
