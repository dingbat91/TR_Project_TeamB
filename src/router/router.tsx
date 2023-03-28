import { Routes, Route } from "react-router-dom";
import Watchlist from "../Components/watchlist/watchlist";
import { Layout } from "../layout/layout";
import { Homepage } from "../pages/homepage/Homepage";
import { MoviePage } from "../pages/movie/MoviePage";
import { ActorPage } from "../pages/actorpage/ActorPage";
import { HealthPage } from "../pages/HealthPage/HealthPage";

export const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Homepage />} />
				<Route path='movie/:movieID' element={<MoviePage />} />
				<Route path='watchlist' element={<Watchlist />} />
				<Route path='actor/:actorID' element={<ActorPage />} />
				<Route path='health' element={<HealthPage />} />
			</Route>
		</Routes>
	);
};
