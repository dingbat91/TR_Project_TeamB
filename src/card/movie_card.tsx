import React, { useState, useEffect } from "react";
import { APIFetch } from "../scripts/fetch/fetch";
import { MovieDetails } from "../types/movie";
import "./movie_card.css";

interface MovieCardInterface {
	movieid: number;
}

export const MovieData: React.FC<MovieCardInterface> = ({ movieid }) => {
	const [moviedata, setMovieData] = useState<MovieDetails>();
	const movieID = movieid;

	useEffect(() => {
		const datafetch = async () => {
			const data = await APIFetch(`/movie/${movieID}`);
			setMovieData(data);
		};
		datafetch();
	}, []);

	const imagesrc = `https://image.tmdb.org/t/p/original${moviedata?.poster_path}`;

	return (
		<article className='card'>
			<img
				className='card__img'
				data-id={moviedata?.id}
				src={imagesrc}
				alt={moviedata?.original_title}
			/>
		</article>
	);
};
