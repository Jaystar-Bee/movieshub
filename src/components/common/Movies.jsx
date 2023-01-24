import React from "react";

import SingleMovie from "./SingleMovie";

const movies = [
  {
    id: 1,
    title: "title 1",
    img: "img1",
  },
  {
    id: 2,
    title: "title 2",
    img: "img2",
  },
  {
    id: 3,
    title: "title 3",
    img: "img3",
  },
  {
    id: 4,
    title: "title 4",
    img: "img4",
  },
  {
    id: 5,
    title: "title 5",
    img: "img5",
  },
  {
    id: 6,
    title: "title 6",
    img: "img6",
  },
  {
    id: 7,
    title: "title 7",
    img: "img7",
  },
  {
    id: 8,
    title: "title 8",
    img: "img8",
  },
];

const Movies = () => {
  return (
    <div className="container flex gap-6 justify-center flex-wrap">
      {movies.map((movie) => {
        return (
          <SingleMovie key={movie.id} title={movie.title} img={movie.img} />
        );
      })}
    </div>
  );
};

export default Movies;
