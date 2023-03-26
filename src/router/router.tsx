import { Routes, Route } from "react-router-dom";
import { Layout } from "../layout/layout";
import { Homepage } from "../pages/homepage/Homepage";
import { MoviePage } from "../pages/movie/MoviePage";
import { ActorPage } from "../pages/actorpage/ActorPage";

export const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Homepage />} />
				<Route path='movie/:movieID' element={<MoviePage />} />
				<Route path='actor/:actorID' element={<ActorPage />} />
			</Route>
		</Routes>
	);
};
