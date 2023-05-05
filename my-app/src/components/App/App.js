import "./App.css";
import { useEffect, useState } from "react";
import getStoreData from "./storeData";

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
        <h2>main content</h2>
      </main>
    </div>
  );
}

export default App;
