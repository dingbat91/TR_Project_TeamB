import React, { useState, useEffect } from "react";
import { APIFetch } from "../scripts/fetch/fetch";
import { MovieDetails } from "../types/movie";
import "./movie_card.css";

interface MovieCardInterface {
	movieid: number;
	title: string;
}

export const MovieData: React.FC<MovieCardInterface> = ({ movieid, title }) => {
	const [moviedata, setMovieData] = useState<MovieDetails>();
	const movieID = movieid;

	useEffect(() => {
		const datafetch = async () => {
			const data = await APIFetch(`/movie/${movieID}`);
			setMovieData(data);
		};
		datafetch();
	}, []);

	const posterImage = `https://image.tmdb.org/t/p/original${moviedata?.poster_path}`; 
	const backdropImage = `https://image.tmdb.org/t/p/original${moviedata?.backdrop_path}`;
	const imageSource = title === 'Netflix' ? posterImage : backdropImage;
	return (
		<>
			<img
				className='card__img'
				data-id={moviedata?.id}
				src={imageSource}
				alt={moviedata?.original_title}
			/>		
		</>
	);
};
