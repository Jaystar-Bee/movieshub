import React, { useContext, useEffect, useState } from "react";
import Movies from "../components/common/Movies";
import { apiContext } from "../store/KeyProvide";
import request from "../axios";

const TrendingView = () => {
  const apiCtx = useContext(apiContext);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    request
      .get(`/SearchAll/${apiCtx.apiKey}/lost`)
      .then((res) => {
        console.log(res.data.results);
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
  }, []);
  return (
    <div>
      {movies.length > 0 && <Movies movies={movies} />}
      {movies.length === 0 && (
        <p className="text-center font-bold text-xl mt-20">No movie Found </p>
      )}
    </div>
  );
};

export default TrendingView;
