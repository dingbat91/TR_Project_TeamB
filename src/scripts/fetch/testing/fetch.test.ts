import { rest } from "msw";
import { APIFetch } from "../fetch";
import { movieID550DetailsMockResponse } from "./mswConfig/mock";
import { server } from "./mswConfig/server";

describe("should fetch data correctly.", () => {
  test("should fetch movie details", async () => {
    const data = await APIFetch("/movie/550");
    expect(data).toStrictEqual(movieID550DetailsMockResponse);
  });
  test("should get error when 500 status code returned", async () => {
    server.use(
      rest.get(
        `${process.env.REACT_APP_BASE_URL}/movie/550`,
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    const data = await APIFetch(`/movie/550`);
    expect(data).toEqual({ error: "something went wrong!" });
  });
  test("should get error when 404 status code returned", async () => {
    server.use(
      rest.get(
        `${process.env.REACT_APP_BASE_URL}/movie/550`,
        (req, res, ctx) => {
          return res(ctx.status(404, "Not Found!"));
        }
      )
    );
    const data = await APIFetch(`/movie/550`);
    expect(data).toEqual({ error: "Not Found!" });
  });
  test("should get error when 401 status code returned", async () => {
    server.use(
      rest.get(
        `${process.env.REACT_APP_BASE_URL}/movie/550`,
        (req, res, ctx) => {
          return res(ctx.status(404, "Unauthorized!"));
        }
      )
    );
    const data = await APIFetch(`/movie/550`);
    expect(data).toEqual({ error: "Unauthorized!" });
  });

  test("should get actor details", async () => {
    const data = await APIFetch("/person/287");
    expect(data.name).toStrictEqual("Brad Pitt");
  });
});

describe("Parameter Test", () => {
  test("Should find Actor", async () => {
    const data = await APIFetch("/search/person", [
      { param: "query", value: "Bradley" },
    ]);
    expect(data.results[0].name).toBe("Bradley Cooper");
  });
});
