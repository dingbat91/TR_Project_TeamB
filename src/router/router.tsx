import { Routes, Route } from "react-router-dom";
import { Layout } from "../layout/layout";
import { Homepage } from "../pages/homepage/Homepage";

export const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Homepage />} />
			</Route>
		</Routes>
	);
};
