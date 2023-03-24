import { title } from "process";
import React, { useState, useContext } from "react";
import { MovieData } from "../../card/movie_card";
import { GenreContext } from "../../pages/homepage/Homepage";

import Dropdown from "../Dropdown/Dropdown";
import "./CardRow.css";

interface CardRowInterface {
	movies: movieDetails[];
	title: string;
}

export interface movieDetails {
	id: number;
	genre: number[];
}

export const CardRow: React.FC<CardRowInterface> = ({ movies, title }) => {
	const [filter, setFilter] = useState<string>("A");
	const Genres = useContext(GenreContext);
	
	console.log(filter);
	console.log(Genres);

	return (
		<>
			{/* <Dropdown
				options={Genres}
				name='RowLabel'
				value=''
				onChangeHandler={setFilter}
			/> */}
			
			<>
				{movies.map((movie) => (
					<>
						{(movie.genre.includes(parseInt(filter)) || filter === "A") && (
							<MovieData movieid={movie.id} title={title}/>
						)}
					</>
				))}
			</>
		</>
	);
};
