import { rest } from "msw";

//base movie URL to C&P for new handlers: https://api.themoviedb.org/3/

export const handlers = [
	rest.get("https://api.themoviedb.org/3/movie/550", (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
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
			})
		);
	}),
	rest.get("https://api.themoviedb.org/3/person/287", (req, res, ctx) => {
		ctx.status(200);
		ctx.json({
			birthday: "1963-12-18",
			known_for_department: "Acting",
			deathday: null,
			id: 287,
			name: "Brad Pitt",
			also_known_as: [
				"برد پیت",
				"Бред Питт",
				"Бред Пітт",
				"Buratto Pitto",
				"Брэд Питт",
				"畢·彼特",
				"ブラッド・ピット",
				"브래드 피트",
				"براد بيت",
				"แบรด พิตต์",
			],
			gender: 2,
			biography:
				"William Bradley \"Brad\" Pitt (born December 18, 1963) is an American actor and film producer. Pitt has received two Academy Award nominations and four Golden Globe Award nominations, winning one. He has been described as one of the world's most attractive men, a label for which he has received substantial media attention. Pitt began his acting career with television guest appearances, including a role on the CBS prime-time soap opera Dallas in 1987. He later gained recognition as the cowboy hitchhiker who seduces Geena Davis's character in the 1991 road movie Thelma & Louise. Pitt's first leading roles in big-budget productions came with A River Runs Through It (1992) and Interview with the Vampire (1994). He was cast opposite Anthony Hopkins in the 1994 drama Legends of the Fall, which earned him his first Golden Globe nomination. In 1995 he gave critically acclaimed performances in the crime thriller Seven and the science fiction film 12 Monkeys, the latter securing him a Golden Globe Award for Best Supporting Actor and an Academy Award nomination.\n\nFour years later, in 1999, Pitt starred in the cult hit Fight Club. He then starred in the major international hit as Rusty Ryan in Ocean's Eleven (2001) and its sequels, Ocean's Twelve (2004) and Ocean's Thirteen (2007). His greatest commercial successes have been Troy (2004) and Mr. & Mrs. Smith (2005).\n\nPitt received his second Academy Award nomination for his title role performance in the 2008 film The Curious Case of Benjamin Button. Following a high-profile relationship with actress Gwyneth Paltrow, Pitt was married to actress Jennifer Aniston for five years. Pitt lives with actress Angelina Jolie in a relationship that has generated wide publicity. He and Jolie have six children—Maddox, Pax, Zahara, Shiloh, Knox, and Vivienne.\n\nSince beginning his relationship with Jolie, he has become increasingly involved in social issues both in the United States and internationally. Pitt owns a production company named Plan B Entertainment, whose productions include the 2007 Academy Award winning Best Picture, The Departed.",
			popularity: 10.647,
			place_of_birth: "Shawnee, Oklahoma, USA",
			profile_path: "/kU3B75TyRiCgE270EyZnHjfivoq.jpg",
			adult: false,
			imdb_id: "nm0000093",
			homepage: null,
		});
	}),
	rest.get("https://api.themoviedb.org/3/search/person", (req, res, ctx) => {
		const {} = req.params;
	}),
];
