import React, { useState } from "react";
import "./Homepage.css";
import Card from "../../components/card/card";
import Search from "../../components/Search/search";
import { getMoviesByKeyword } from "../../scripts/utils";
import { MovieDetails } from "../../types/movie";

export function Homepage() {
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
			const searchedMovieData = await getMoviesByKeyword(searchKeyword);

			setSearchedMovies(searchedMovieData);
		}
	};

	return (
		<div className='App bg-slate-200'>
			<Search
				value={searchKeyword}
				onChangeHandler={handleSearchKeywordChange}
				onKeyDownHandler={handleSearchKeyDown}
			/>
			<div>
				{searchedMovies.map((movie: MovieDetails) => (
					<Card movieDetails={movie} />
				))}
			</div>
		</div>
	);
}
