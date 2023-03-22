import React, { useState } from "react";

import "./App.css";
import Search from "./components/Search/search";
import { getMoviesByKeyword } from "./scripts/utils";
import { MovieDetails } from "./types/movie";

function App() {
  //TODO Implement https://api.themoviedb.org/3/genre/movie/list?api_key=API_KEY&language=en-US
  // to get all genres
  // const [genres, setGenres] = useState<Array<any>>([
  //   {
  //     id: 28,
  //     name: "Action",
  //   },
  //   {
  //     id: 12,
  //     name: "Adventure",
  //   },
  //   {
  //     id: 16,
  //     name: "Animation",
  //   },
  //   {
  //     id: 35,
  //     name: "Comedy",
  //   },
  //   {
  //     id: 80,
  //     name: "Crime",
  //   },
  // ]);
  // const [selectedGenreID, setSelectedGenreID] = useState<string>(genres[0].id);

  // const handleGenreChange = (value: string) => {
  //   setSelectedGenreID(value);
  // };

  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [searchedMovies, setSearchedMovies] = useState<MovieDetails[]>([]);

  const handleSearchKeywordChange = (value: string) => {
    console.log(value);
    setSearchKeyword(value);
  };

  const handleSearchKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    console.log("I am here", event.key);
    if (event.key === "Enter") {
      const searchedMovieData = await getMoviesByKeyword("arnold");
      console.log(
        "🚀 ~ file: App.tsx:54 ~ App ~ searchedMovieData:",
        searchedMovieData
      );
      setSearchedMovies(searchedMovieData);
    }
  };

  return (
    <div className="App">
      <Search
        value={searchKeyword}
        onChangeHandler={handleSearchKeywordChange}
        onKeyDownHandler={handleSearchKeyDown}
      />
      {/* <h1 className="text-teal-600 text-3xl font-bold underline">
        Hello world!
      </h1> */}
      {/* to test dropdown component uncomment below code */}
      {/* <header>Team PopCorn</header>
      <Dropdown
        name="genreDropdown"
        onChangeHandler={handleGenreChange}
        value={selectedGenreID}
        labelText=""
        selectText="genre"
        options={genres}
      /> */}
    </div>
  );
}

export default App;
