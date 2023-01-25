// import { useState } from "react";
import SingleMovie from "./SingleMovie";

const Movies = (props) => {
  //   const [currentPage, setCurrentPage] = useState(1);
  const movies = props.movies;

  return (
    <>
      <div className="container flex gap-10 justify-center flex-wrap pb-20">
        {movies.map((movie) => {
          return (
            <SingleMovie
              key={movie.id}
              title={movie.title}
              image={movie.image}
              type={movie.resultType}
              id={movie.id}
            />
          );
        })}
      </div>

      {/* <div className="mt-6 container flex justify-center pb-10">
        <ul className="flex gap-6">
          <button className="bg-dark-light rounded-md hover:bg-primary-green hover:text-dark px-6 py-4 font-semibold text-lg duration-500">
            Previous
          </button>

          <li></li>
          <button className="bg-dark-light rounded-md hover:bg-primary-green hover:text-dark px-6 py-4 font-semibold text-lg duration-500">
            Next
          </button>
        </ul>
      </div> */}
    </>
  );
};

export default Movies;
