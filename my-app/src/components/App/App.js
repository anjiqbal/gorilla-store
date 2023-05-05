import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import getStoreData from "./storeData";
import CardCollection from "./CardCollection";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function App() {
  const [myStoreData, setMyStoreData] = useState(null);

  useEffect(() => {
    const fetchMyStoreData = async () => {
      const data = await getStoreData();
      setMyStoreData(data);
    };
    fetchMyStoreData();
  }, []);
  console.log(myStoreData);
  return (
    <div className="App">
      <header>
        <h1>Gorilla Store</h1>
        <img src="https://t4.ftcdn.net/jpg/05/65/55/03/360_F_565550367_1dT0Pc6mghKERU7utRfm7IbwaTilDgOB.jpg" alt="Gorilla"/>
          <div className = "App__header-shopping">
            <IconButton>
              <ShoppingCartIcon className="App__header-shopping-cart" />
            </IconButton>
          </div>
      </header>
      <main>
        <CardCollection myStoreData={myStoreData} />
      </main>
    </div>
  );
}

export default App;
