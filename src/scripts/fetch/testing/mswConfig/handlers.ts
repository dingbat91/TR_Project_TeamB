import { rest } from "msw";
import {
  movieID550DetailsMockResponse,
  movieID603692DetailsMockResponse,
  personID287DetailsMockResponse,
  searchByPersonMockResponse,
} from "./mock";

//base movie URL to C&P for new handlers: https://api.themoviedb.org/3/

export const handlers = [
  rest.get("https://api.themoviedb.org/3/movie/550", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(movieID550DetailsMockResponse));
  }),
  rest.get("https://api.themoviedb.org/3/movie/603692", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(movieID603692DetailsMockResponse));
  }),
  rest.get("https://api.themoviedb.org/3/person/287", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(personID287DetailsMockResponse));
  }),
  rest.get("https://api.themoviedb.org/3/search/person", (req, res, ctx) => {
    const query = req.url.searchParams.get("query");

    if (query === "Bradley") {
      return res(ctx.status(200), ctx.json(searchByPersonMockResponse));
    }
  }),
];
