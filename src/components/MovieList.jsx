import React from "react";
import movies from "../data/movies";

function MovieList() {
  return (
    <>
      {movies.map((item, index) => {
        return (
          <div className="card-container">
            <img className="movie-img" key={index} src={item["image"]}></img>
            <div className="movie-detail">
              <div className="movie-title" key={index}>
                Title:
                {item["title"]}
              </div>
              <div className="movie-year" key={index}>
                Year:
                {item["year"]}
              </div>
              <div className="movie-runtime" key={index}>
                Runtime:
                {item["runtime"]}
              </div>
              <div className="movie-genres" key={index}>
                Genres:
                {item["genres"].map((type) => {
                  return <button className="movie-genres-type">{type}</button>;
                })}
              </div>
              <div className="movie-imdb-ratings" key={index}>
                IMDB Ratings:
                {item["imdbRating"]}
              </div>
              <div className="movie-imdb-votes" key={index}>
                IMDB Votes:
                {item["imdbVotes"]}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default MovieList;
