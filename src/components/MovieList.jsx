import React from "react";
import movies from "../data/movies";

function MovieList() {
  return (
    <>
      {movies.map((item, index) => {
        return (
          <div className="card-container">
            <img
              className="movie-img"
              key={index}
              src={item["image"]}
              alt={item["title"]}
            ></img>
            <div className="movie-detail">
              <p className="movie-title" key={index}>
                {`Title: `}
                {item["title"]}
              </p>
              <p className="movie-year" key={index}>
                {`Year: `}
                {item["year"]}
              </p>
              <p className="movie-runtime" key={index}>
                {`Runtime: `}
                {item["runtime"]}
              </p>
              <p className="movie-genres" key={index}>
                {`Genres: `}
                {item["genres"].map((type) => {
                  return <button className="movie-genres-type">{type}</button>;
                })}
              </p>
              <p className="movie-imdb-ratings" key={index}>
                I{`MDB Ratings: `}
                {item["imdbRating"]}
              </p>
              <p className="movie-imdb-votes" key={index}>
                {`IMDB Votes: `}
                {item["imdbVotes"]}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default MovieList;
