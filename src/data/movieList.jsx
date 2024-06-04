/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import movies from "./movies";
import "./movieList.css";
import firstImage from "./images/Movie Image3.png";
import secondImage from "./images/Movie Image.png";
import thridImage from "./images/Movie Image2.png";

function MovieList() {
  let count = -1;
  let images = [firstImage, secondImage, thridImage];
  return (
    <div className="mainContent">
      <h1
        css={css`
          display: flex;
          justify-content: center;
          font-size: 40px;
          margin: 30px 0 0 0;
        `}
      >
        Movie List Section
      </h1>
      {movies.map((movie, index) => {
        if (
          movie.title === "Assassin's Creed" ||
          movie.title === "Luke Cage" ||
          movie.title === "Doctor Strange"
        ) {
          count++;
          return (
            <div
              key={index}
              css={css`
                width: 400px;
                height: 250px;
                padding: 10px;
                display: flex;
                gap: 10px;
                box-shadow: 0 4px 40px 0 rgba(145, 124, 124, 0.25);
              `}
            >
              <img
                src={images[count]}
                alt={images[count]}
                width={102}
                height={100}
              />
              <div
                css={css`
                  display: flex;
                  flex-direction: column;
                  gap: 10px;
                  font-size: 20px;
                `}
              >
                <span>title: {movie.title}</span>
                <span>Year: {movie.year}</span>
                <span>Runtime: {movie.runtime}</span>
                <span>
                  Genres:
                  {movie.genres.map((genre, indexx) => {
                    if (indexx < 2) {
                      return (
                        <span
                          key={indexx}
                          css={css`
                            margin: 0 5px;
                            gap: 10px;
                          `}
                        >
                          <span
                            css={css`
                              width: 68px;
                              height: 27px;
                              padding: 5px;
                              background-color: #eaac99;
                              border-radius: 10px;
                              font-size: 16px;
                            `}
                          >
                            {genre}
                          </span>
                        </span>
                      );
                    }
                  })}
                </span>
                <span>IMDB Ratings: {movie.imdbRating}</span>
                <span>IMDB Votes: {movie.imdbVotes}</span>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default MovieList;
