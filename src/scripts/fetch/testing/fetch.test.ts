import { APIFetch } from "../fetch";

describe("should fetch data correctly.", () => {
	test("should fetch movie details", async () => {
		if (!process.env.APIKEY) {
			console.log(process.env);
			throw new Error(`MISSING API KEY! Data: ${process.env.APIKEY}`);
		}
		const data = await APIFetch("/movie/550", process.env.APIKEY);
		expect(data).toStrictEqual({
			adult: false,
			backdrop_path: "/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg",
			belongs_to_collection: null,
			budget: 63000000,
			genres: [
				{
					id: 18,
					name: "Drama",
				},
			],
			homepage: "",
			id: 550,
			imdb_id: "tt0137523",
			original_language: "en",
			original_title: "Fight Club",
			overview:
				'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
			popularity: 0.5,
			poster_path: null,
			production_companies: [
				{
					id: 508,
					logo_path: "/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png",
					name: "Regency Enterprises",
					origin_country: "US",
				},
				{
					id: 711,
					logo_path: null,
					name: "Fox 2000 Pictures",
					origin_country: "",
				},
				{
					id: 20555,
					logo_path: null,
					name: "Taurus Film",
					origin_country: "",
				},
				{
					id: 54050,
					logo_path: null,
					name: "Linson Films",
					origin_country: "",
				},
				{
					id: 54051,
					logo_path: null,
					name: "Atman Entertainment",
					origin_country: "",
				},
				{
					id: 54052,
					logo_path: null,
					name: "Knickerbocker Films",
					origin_country: "",
				},
				{
					id: 25,
					logo_path: "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
					name: "20th Century Fox",
					origin_country: "US",
				},
			],
			production_countries: [
				{
					iso_3166_1: "US",
					name: "United States of America",
				},
			],
			release_date: "1999-10-12",
			revenue: 100853753,
			runtime: 139,
			spoken_languages: [
				{
					iso_639_1: "en",
					name: "English",
				},
			],
			status: "Released",
			tagline:
				"How much can you know about yourself if you've never been in a fight?",
			title: "Fight Club",
			video: false,
			vote_average: 7.8,
			vote_count: 3439,
		});
	});

	test("should get actor details", async () => {
		if (!process.env.APIKEY) {
			console.log(process.env);
			throw new Error(`MISSING API KEY! Data: ${process.env.APIKEY}`);
		}
		const data = await APIFetch("/person/287", process.env.APIKEY);
		expect(data.name).toStrictEqual("Brad Pitt");
	});
});

describe("Parameter Test", () => {
	test("Should find Actor", async () => {
		if (!process.env.APIKEY) {
			console.log(process.env);
			throw new Error(`MISSING API KEY! Data: ${process.env.APIKEY}`);
		}
		const data = await APIFetch("/search/person", process.env.APIKEY, [
			{ param: "query", value: "Bradley" },
		]);
		expect(data.results[0].name).tobe("Bradley Cooper");
	});
});
