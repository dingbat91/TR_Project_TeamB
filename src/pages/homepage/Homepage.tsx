import React, { createContext, useEffect, useState } from "react";
import "./Homepage.css";

import { getMoviesByKeyword } from "../../scripts/services/service";
import {
	PopularMoviesResponse,
	TopRatedMovie,
	NowPlayingMoviesResponse,
	UpcomingMoviesResponse,
	MovieDetails
  } from "../../types/movie";
import { Genre } from "../../types/genres";
import { APIFetch } from "../../scripts/fetch/fetch";
import { CardRow } from "../../Components/cardRow/CardRow";
import { Movie } from "../../types/movie";
import { Banner } from "../banner/banner";
import { MovieData } from "../../card/movie_card";

export interface movieDetails {
	  movieData: Movie[];
	}

export const GenreContext = createContext<Genre[]>([]);

export function Homepage() {

	const [genrelist, setGenreList] = useState<Genre[]>([]);
	const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
	const [topratedMovies, setTopRatedMovies] = useState<Movie[]>([]);
	const [nowplayingdMovies, setNowPlayingMovies] = useState<Movie[]>([]);
	const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
	const movieData = MovieData;

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
			
			const dataupcoming = (await APIFetch("/movie/upcoming")) as UpcomingMoviesResponse;
			const upcomingdata:Movie[] = dataupcoming.results
			setUpcomingMovies(upcomingdata);

			const datanowplaying = (await APIFetch("/movie/now_playing")) as NowPlayingMoviesResponse;
			const nowdata:Movie[] = datanowplaying.results
			setNowPlayingMovies(nowdata);

			const datapop = (await APIFetch("/movie/popular")) as PopularMoviesResponse;
			const popdata:Movie[] = datapop.results 
			setPopularMovies(popdata);

			const datatoprated = (await APIFetch("/movie/top_rated")) as TopRatedMovie;
			const toprateddata: Movie[] = datatoprated.results
			setTopRatedMovies(toprateddata);
		};
		fetchRows();
	}, []);



	return (
		<div className='App'>

			<GenreContext.Provider value={genrelist}>
				<div className='card__netflixOriginal'>
					<div className='movies__header'>
						<h1><strong>PopCorn Original</strong></h1>
					</div>
					<div className='original__movies'>
						<CardRow title='Netflix' movies={popularMovies} />
					</div>
				</div>
				<div className='card__movies'>
					<div className='movies__header'>
						<h1><strong>Now Playing</strong></h1>
					</div>
					<div className='movies__container'>
						<CardRow title='Trending' movies={nowplayingdMovies} />
					</div>
				</div>
				<div className='card__movies'>
					<div className='movies__header'>
						<h1><strong>Top Rated</strong></h1>
					</div>
					<div className='movies__container'>
						<CardRow title='top rated' movies={topratedMovies} />
					</div>
				</div>
				<div className='card__movies'>
					<div className='movies__header'>
						<h1><strong>Upcoming Movies</strong></h1>
					</div>
					<div className='movies__container'>
						<CardRow title='top rated' movies={upcomingMovies} />
					</div>
				</div>
			</GenreContext.Provider>
		</div>
	);
}
