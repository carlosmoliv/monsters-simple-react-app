import "./App.css";
import { Component } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchInput from "./components/search-input/search-input.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchValue: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchValue };
    });
  };

  render() {
    const { monsters, searchValue } = this.state;
    const { handleSearch } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchValue);
    });

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
  }
}

export default App;
