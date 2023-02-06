import React, { useEffect, useState } from "react";

import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchInput from "./components/search-input/search-input.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const handleMonsters = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  };

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchValue(searchValue);
  };
  console.log("Render");
  useEffect(() => {
    handleMonsters();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchValue);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchValue]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchInput
        className="search-box-monsters"
        placeholder="Search monsters"
        onChangeHandler={handleSearch}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
