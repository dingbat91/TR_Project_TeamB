import React, { createContext, useEffect, useState } from "react";
// import "./Homepage.css";
import Card from "../../Components/card/card";
import Search from "../../Components/Search/search";
import { getMoviesByKeyword } from "../../scripts/utils";
import { MovieDetails, PopularMoviesResponse } from "../../types/movie";
import { Genre } from "../../types/genres";
import { APIFetch } from "../../scripts/fetch/fetch";
import { CardRow } from "../../Components/cardRow/CardRow";
import { movieDetails } from "../../Components/cardRow/CardRow";


export const GenreContext = createContext<Genre[]>([]);

export function Homepage() {
	const [genrelist, setGenreList] = useState<Genre[]>([]);
	const [popularMovies, setPopularMovies] = useState<movieDetails[]>([])

	//Genre useEffect
	useEffect(() => {
		const fetchGenre = async () => {
			const data = await APIFetch("/genre/movie/list");
			setGenreList(data.genres);
		};
		fetchGenre();
	}, []);

	//Movie list useEffect
	useEffect(() => {
		const fetchRows = async () => {
			const data = await APIFetch("/movie/popular") as PopularMoviesResponse
			const popdata: movieDetails[] = data.results.map((movie) => { return { id: movie.id, genre: movie.genre_ids } })
			console.log(popdata);
			setPopularMovies(popdata)
		}
		fetchRows()
	}, [])

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
		<div className='App'>
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
			<GenreContext.Provider value={genrelist}>
				<div className="card__netflixOriginal">
					<div className="card_title">
						<h2>Netflix Original</h2>
					</div>
					<div className="original__movies">
						<CardRow title="Netflix" movies={popularMovies} />
					</div>
				</div>
				<div className="card__movies">
					<div className="movies__header">
						<h2>Trending Now</h2>
					</div>
					<div className="movies__container">
					<CardRow title="Trending" movies={popularMovies} />
					</div>
					
				</div>
				<div className="card__movies">
					<div className="movies__header">
						<h2>Top Rated</h2>
					</div>
					<div className="movies__container">
					<CardRow title="top rated"  movies={popularMovies} />
					</div>
				</div>
			</GenreContext.Provider>
		</div>
	);
}
