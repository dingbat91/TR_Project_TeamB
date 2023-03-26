import React, { useContext, useState } from "react";
import { WatchlistContext } from "../../layout/layout";

const Watchlist: React.FC = () => {
  //   const [watchlistMovies, setWatchlistMovies] = useState<any[]>([
  //     {
  //       adult: false,
  //       backdrop_path: "/a2tys4sD7xzVaogPntGsT1ypVoT.jpg",
  //       genre_ids: [53, 35, 27, 80],
  //       id: 804150,
  //       original_language: "en",
  //       original_title: "Cocaine Bear",
  //       overview:
  //         "Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.",
  //       popularity: 3778.499,
  //       poster_path: "/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg",
  //       release_date: new Date("2023-02-22"),
  //       title: "Cocaine Bear",
  //       video: false,
  //       vote_average: 6.5,
  //       vote_count: 426,
  //     },
  //     {
  //       adult: false,
  //       backdrop_path: "/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg",
  //       genre_ids: [28, 53, 80],
  //       id: 603692,
  //       original_language: "en",
  //       original_title: "John Wick: Chapter 4",
  //       overview:
  //         "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
  //       popularity: 2252.114,
  //       poster_path: "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
  //       release_date: new Date("2023-03-22"),
  //       title: "John Wick: Chapter 4",
  //       video: false,
  //       vote_average: 8.3,
  //       vote_count: 131,
  //     },
  //     {
  //       adult: false,
  //       backdrop_path: "/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg",
  //       genre_ids: [16, 12, 35, 10751],
  //       id: 315162,
  //       original_language: "en",
  //       original_title: "Puss in Boots: The Last Wish",
  //       overview:
  //         "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
  //       popularity: 1819.763,
  //       poster_path: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
  //       release_date: new Date("2022-12-07"),
  //       title: "Puss in Boots: The Last Wish",
  //       video: false,
  //       vote_average: 8.3,
  //       vote_count: 4803,
  //     },
  //     {
  //       adult: false,
  //       backdrop_path: "/a2tys4sD7xzVaogPntGsT1ypVoT.jpg",
  //       genre_ids: [53, 35, 27, 80],
  //       id: 804150,
  //       original_language: "en",
  //       original_title: "Cocaine Bear",
  //       overview:
  //         "Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.",
  //       popularity: 3778.499,
  //       poster_path: "/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg",
  //       release_date: new Date("2023-02-22"),
  //       title: "Cocaine Bear",
  //       video: false,
  //       vote_average: 6.5,
  //       vote_count: 426,
  //     },
  //     {
  //       adult: false,
  //       backdrop_path: "/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg",
  //       genre_ids: [28, 53, 80],
  //       id: 603692,
  //       original_language: "en",
  //       original_title: "John Wick: Chapter 4",
  //       overview:
  //         "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
  //       popularity: 2252.114,
  //       poster_path: "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
  //       release_date: new Date("2023-03-22"),
  //       title: "John Wick: Chapter 4",
  //       video: false,
  //       vote_average: 8.3,
  //       vote_count: 131,
  //     },
  //     {
  //       adult: false,
  //       backdrop_path: "/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg",
  //       genre_ids: [16, 12, 35, 10751],
  //       id: 315162,
  //       original_language: "en",
  //       original_title: "Puss in Boots: The Last Wish",
  //       overview:
  //         "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
  //       popularity: 1819.763,
  //       poster_path: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
  //       release_date: new Date("2022-12-07"),
  //       title: "Puss in Boots: The Last Wish",
  //       video: false,
  //       vote_average: 8.3,
  //       vote_count: 4803,
  //     },
  //     {
  //       adult: false,
  //       backdrop_path: "/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg",
  //       genre_ids: [16, 12, 35, 10751],
  //       id: 315162,
  //       original_language: "en",
  //       original_title: "Puss in Boots: The Last Wish",
  //       overview:
  //         "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
  //       popularity: 1819.763,
  //       poster_path: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
  //       release_date: new Date("2022-12-07"),
  //       title: "Puss in Boots: The Last Wish",
  //       video: false,
  //       vote_average: 8.3,
  //       vote_count: 4803,
  //     },
  //     {
  //       adult: false,
  //       backdrop_path: "/a2tys4sD7xzVaogPntGsT1ypVoT.jpg",
  //       genre_ids: [53, 35, 27, 80],
  //       id: 804150,
  //       original_language: "en",
  //       original_title: "Cocaine Bear",
  //       overview:
  //         "Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.",
  //       popularity: 3778.499,
  //       poster_path: "/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg",
  //       release_date: new Date("2023-02-22"),
  //       title: "Cocaine Bear",
  //       video: false,
  //       vote_average: 6.5,
  //       vote_count: 426,
  //     },
  //     {
  //       adult: false,
  //       backdrop_path: "/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg",
  //       genre_ids: [28, 53, 80],
  //       id: 603692,
  //       original_language: "en",
  //       original_title: "John Wick: Chapter 4",
  //       overview:
  //         "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
  //       popularity: 2252.114,
  //       poster_path: "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
  //       release_date: new Date("2023-03-22"),
  //       title: "John Wick: Chapter 4",
  //       video: false,
  //       vote_average: 8.3,
  //       vote_count: 131,
  //     },
  //     {
  //       adult: false,
  //       backdrop_path: "/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg",
  //       genre_ids: [16, 12, 35, 10751],
  //       id: 315162,
  //       original_language: "en",
  //       original_title: "Puss in Boots: The Last Wish",
  //       overview:
  //         "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
  //       popularity: 1819.763,
  //       poster_path: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
  //       release_date: new Date("2022-12-07"),
  //       title: "Puss in Boots: The Last Wish",
  //       video: false,
  //       vote_average: 8.3,
  //       vote_count: 4803,
  //     },
  //     {
  //       adult: false,
  //       backdrop_path: "/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg",
  //       genre_ids: [16, 12, 35, 10751],
  //       id: 315162,
  //       original_language: "en",
  //       original_title: "Puss in Boots: The Last Wish",
  //       overview:
  //         "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
  //       popularity: 1819.763,
  //       poster_path: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
  //       release_date: new Date("2022-12-07"),
  //       title: "Puss in Boots: The Last Wish",
  //       video: false,
  //       vote_average: 8.3,
  //       vote_count: 4803,
  //     },
  //   ]);
  const watchlistMoviesContext = useContext(WatchlistContext);
  return (
    <>
      <div className="text-center text-2xl pb-2.5">My WatchList</div>
      <div className="flex flex-wrap justify-center">
        {watchlistMoviesContext.length > 0 ? (
          watchlistMoviesContext.map((movie) => (
            //<MovieData movieid={movie.id} title={movie.original_title} />
            <div className="basis-1/6 m-1">
              <img
                className="md:w-56"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={`${movie.original_title} movie poster`}
              />
            </div>
          ))
        ) : (
          <p>No movies added to watchlist</p>
        )}
      </div>
    </>
  );
};

export default Watchlist;
