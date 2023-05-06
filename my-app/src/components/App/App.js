import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import getStoreData from "./storeData";
import Search from "./Search/index";
import CardCollection from "./CardCollection";

function App() {
  const [myStoreData, setMyStoreData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchMyStoreData = async () => {
      const data = await getStoreData();
      setMyStoreData(data);
    };
    fetchMyStoreData();
  }, []);

  function getSearchTerm(input) {
    setSearchTerm(input);
  }
  console.log(searchTerm);
  return (
    <div className="App">
      <header>
        <h1>Gorilla Store</h1>
        <img
          src="https://t4.ftcdn.net/jpg/05/65/55/03/360_F_565550367_1dT0Pc6mghKERU7utRfm7IbwaTilDgOB.jpg"
          alt="Gorilla"
        />
        <div className="App__header-shopping">
          <IconButton>
            <ShoppingCartIcon className="App__header-shopping-cart" />
          </IconButton>
        </div>
      </header>
      <main>
        <div>
          <Search getSearchTerm={getSearchTerm} />
        </div>
        <CardCollection myStoreData={myStoreData} />
      </main>
    </div>
  );
}

export default App;
