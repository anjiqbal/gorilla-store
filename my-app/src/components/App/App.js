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
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const fetchMyStoreData = async () => {
      const data = await getStoreData();
      setMyStoreData(data);
      setFilteredData(data);
    };
    fetchMyStoreData();
  }, []);

  useEffect(() => {
    if (myStoreData && searchTerm) {
      const filtered = myStoreData.filter((item) => {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilteredData(filtered);
    } else if (myStoreData) {
      setFilteredData(myStoreData);
    }
  }, [searchTerm, myStoreData]);

  function getSearchTerm(input) {
    setSearchTerm(input);
  }

  return (
    <div className="App">
      <header>
        <div className="App__header-title">
          <img
            src="https://t4.ftcdn.net/jpg/05/65/55/03/360_F_565550367_1dT0Pc6mghKERU7utRfm7IbwaTilDgOB.jpg"
            alt="Gorilla"
          />
          <h1>Gorilla Store</h1>
        </div>
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
        <CardCollection myStoreData={filteredData} />
      </main>
    </div>
  );
}

export default App;
