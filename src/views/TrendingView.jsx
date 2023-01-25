import React, { useContext, useEffect, useState } from "react";
import Movies from "../components/common/Movies";
import { apiContext } from "../store/KeyProvide";
import request from "../axios";

const TrendingView = () => {
  const apiCtx = useContext(apiContext);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    request.get(`/SearchAll/k_1g468mcp/lost`).then((res) => {
      console.log(res.data.results);
      setMovies(res.data.results);
    });
  }, []);
  return (
    <div>
      <Movies movies={movies} />
    </div>
  );
};

export default TrendingView;
