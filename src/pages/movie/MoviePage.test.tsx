import { render, screen, waitFor } from "@testing-library/react";
import { MoviePage } from "./MoviePage";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe(" Render Tests", () => {
	test("Page Renders", async () => {
		const movieID = 550;

		render(
			<MemoryRouter initialEntries={[`/movies/${movieID}`]}>
				<Routes>
					<Route path='/movies/:movieID/*' element={<MoviePage />} />
				</Routes>
			</MemoryRouter>
		);
		expect(await screen.findByText("Fight Club")).toBeInTheDocument();
	});

	test("Page Maps Genre's correctly", async () => {
		const movieID = 550;
		render(
			<MemoryRouter initialEntries={[`/movies/${movieID}`]}>
				<Routes>
					<Route path='/movies/:movieID/*' element={<MoviePage />} />
				</Routes>
			</MemoryRouter>
		);

		expect(await screen.findByText("Drama")).toBeInTheDocument();
	});
});
