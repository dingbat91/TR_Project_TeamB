import React, { useState } from "react";

import "./App.css";
import Dropdown from "./Components/Dropdown/DropdownComponent";

function App() {
  //TODO Implement https://api.themoviedb.org/3/genre/movie/list?api_key=API_KEY&language=en-US
  // to get all genres
  const [genres, setGenres] = useState<Array<any>>([
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
  ]);
  const [selectedGenreID, setSelectedGenreID] = useState<string>(genres[0].id);

  const handleGenreChange = (value: string) => {
    setSelectedGenreID(value);
  };
  return (
    <div className="App">
      <header>Team PopCorn</header>
      <Dropdown
        name="genreDropdown"
        onChangeHandler={handleGenreChange}
        value={selectedGenreID}
        labelText=""
        selectText="genre"
        options={genres}
      />
    </div>
  );
}

export default App;
