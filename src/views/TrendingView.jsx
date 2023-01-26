import React, { useContext, useEffect, useState } from "react";
import Movies from "../components/common/Movies";
import { apiContext } from "../store/KeyProvide";
import request from "../axios";

const TrendingView = () => {
  const apiCtx = useContext(apiContext);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    request
      .get(`/SearchAll/${apiCtx.apiKey}/lost`)
      .then((res) => {
        setMovies(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        alert("Something went wrong");
      });
  }, [apiCtx]);
  return (
    <div>
      {loading && (
        <p className="text-center font-bold text-xl mt-20">Loading...</p>
      )}
      {movies.length > 0 && <Movies movies={movies} />}
      {movies.length === 0 && !loading && (
        <p className="text-center font-bold text-xl mt-20">No movie Found </p>
      )}
    </div>
  );
};

export default TrendingView;
