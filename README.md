# Team Popcorn - Movie Information Frontend

## Created By

Charles , Jon Damaso, Matthew Hanson, Mrunal

## Details

This website is a frontend for <https://www.themoviedb.org/>'s API. It allows a user to search for movies and actors and view information about them. It also displays a list of trending, popular, and upcoming movies. You can also place movies into your own custom watchlist.

## Key Features

- Displays popular, trending, top rated, upcoming movies.
- Search movies using searchbox.
- Show movie details such as overview, budget, cast, trailers.
- Display actor details like biography, popular movies, trailers
- Filter movies by Category/Genres
- Display popular TV shows with rating and year
- Ability add/remove movies in watchlist and browse it

## Key Parts

It is comprised of the following parts

### Pages

- Home
- Actor Details
- Movie Details
- Genre list
- TV Shows
- Watchlist

### Components

React Components Include:

- Watchlist - Manages watchlist
- cardRow - Dislays a row of Movie Cards
- Search - Manages search funcitonality.
- dropdown - Dropdown menu for genre list
- card - Displays a movie card
- Header - Displayed header component.

## Installation Instructions

To run this project locally, you will need to do the following:

1. Clone the repository via: `https://github.com/dingbat91/TR_Project_TeamB.git`
2. Install the dependencies via: `npm install`
3. create a .env file in the root directory which takes two entries
   - REACT*APP_APIKEY= *"Your api key here!"\_
   - REACT_APP_BASE_URL= <https://api.themoviedb.org/3>
4. Run the project via: `npm start`

## Instructions

### Home Page

<img src= src\assets\images\readme\Homepage.png width=800/>

The home page displays a list of trending, popular, and upcoming movies. Any of the posters or splash images for a filk cam be clicked to view more information about the movie.

#### Header

<img src="src\assets\images\readme\Header.png" width=800>

The header contains a search bar, and a my watchlist button. You can use the search bar to search for any film and open it by clicking the selection. My Watchlist will bring you to your current watchlist.

#### Search Functionality

<img src="src\assets\images\readme\Search.png" width=800>

The search bar can be used to find movies by using a keyword related to movie title or details which will then display list of related movies. After clicking on a specific movie, it will redirect to the details of that particular movie.

### Genre Page

<img src= src\assets\images\readme\GenrePage.png width=800/>

The Genre page displays a list of movies based on their Genre. The genres are displayed in a dropdown menu.

The Movies are displayed in a grid of cards which can be clicked to view more information about the movie.

### TV Shows

<img src="src\assets\images\readme\TVShows.png" width=800 />

The Tv Shows page displays a list of popular TV shows.
The shows are displayed in a grid of cards.

### Movie Details

<img src= src\assets\images\readme\MoviePage.png width=800/>

The movie details page gives detailed information on a selected movie. The details given are:

- Title
- Byline
- Overview
- Release Status
- Genre
- Budget
- Revenue
- Cast
- Trailers

The images of the cast can be selected to get more details about them, and trailers can also be watched from the page by clicking on them.

### Actor Details

<img src= src\assets\images\readme\ActorPage.png width=800/>

The Actor Details page displays informatin on the selected actor. It displays the following information:

- Name
- Biography
- Birth Date
- Birth Place
- Death Date (if applicable)
- Social Media Links (If available)
- Known For Movies
- Trailers for Known movies

Movies can be selected by clicking on the posters. and trailers can also be watched from the page by clicking on them.

### Watchlist

<img src="src\assets\images\readme\Watchlist.png" width=800>

The watchlist page displays a list of movies that have been added to the watchlist. Movies can be removed from the watchlist by clicking the remove button.

Movies can also be selected to view more information about them.

## Live URL:

https://team-popcorn-movie-database.vercel.app/

## Roadmap

- [x] Show popular/trending/top rated/upcoming movies
- [x] Implement Search Movies functionality
- [x] Display movie details along with cast,videos
- [x] Display actor details with biography and popular movies
- [x] Filter movies by genres
- [x] Display popular TV shows with rating and year
- [x] Ability add/remove movies in watchlist and browse it
- [ ] Display TV show details
- [ ] Pagination/load more content functionality (lazy loading)
- [ ] Responsiveness
- [ ] Email/SMS for latest releases
- [ ] Open for Extensions
