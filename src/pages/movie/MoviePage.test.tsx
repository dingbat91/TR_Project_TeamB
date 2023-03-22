import { render, screen } from "@testing-library/react";
import { MoviePage } from "./MoviePage";

describe(" Render Tests", () => {
	test("Page Renders", async () => {
		render(<MoviePage />);
		expect(await screen.findByText("Fight Club")).toBeInTheDocument();
	});

	test("Page Maps Genre's correctly", async () => {
		render(<MoviePage />);
		expect(await screen.findByText("Drama")).toBeInTheDocument();
	});
});
