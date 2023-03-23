import React, { useState, useEffect } from "react";
import { APIFetch } from "../scripts/fetch/fetch";
import { MovieDetails } from "../types/movie";

interface MovieCardInterface {
	movieid: number;
}

export const MovieData: React.FC<MovieCardInterface> = ({ movieid }) => {
	const [moviedata, setMovieData] = useState<MovieDetails>();
	const movieID = { movieid };

	useEffect(() => {
		const datafetch = async () => {
			if (process.env.REACT_APP_APIKEY) {
				const data = await APIFetch(
					`${process.env.REACT_APP_BASE_URL},/movie/${movieID}`
				);
				setMovieData(data);
			} else {
				throw new Error("Missing API KEY");
			}
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
			<h3 className='card__title'>{moviedata?.original_title}</h3>
		</article>
	);
};
