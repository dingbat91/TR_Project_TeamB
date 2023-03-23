import React, { useEffect, useState } from "react";
import { MovieData } from "../../card/movie_card";
import { APIFetch } from "../../scripts/fetch/fetch";
import { TopRatedMovie } from "../../types/movie";
import Dropdown from "../Dropdown/Dropdown";
import "./CardRow.css";

interface CardRowInterface {
	movieIDs: number[];
}

export const CardRow: React.FC = () => {
	const [movieIDs, setMovieIDs] = useState<number[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = (await APIFetch("/movie/top_rated")) as TopRatedMovie;
			const IDs = data.results.map((result) => result.id);
			setMovieIDs(IDs);
		};
		fetchData();
	}, []);

	return (
		<div className='CardRow'>
			{movieIDs.map((id) => (
				<MovieData movieid={id} />
			))}
		</div>
	);
};
