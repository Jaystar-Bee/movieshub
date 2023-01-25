import { useContext, useState } from "react";
import Movies from "./../components/common/Movies";
import request from "../axios";
import { apiContext } from "../store/KeyProvide";

const SearchView = () => {
  //states
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  //context
  const apiCtx = useContext(apiContext);

  // get movies
  const getMovies = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await request.get(`/SearchTitle/${apiCtx.apiKey}/${title}`);
      setMovies(res.data.results);
      setTitle("");
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
      setLoading(false);
      setTitle("");
    }
  };

  return (
    <div>
      <form className="flex gap-4 mb-10 container" onSubmit={getMovies}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="search movies"
          spellCheck
          className="px-6 py-2 rounded-md bg-dark-light w-[32rem] outline-none border-none"
        />
        <button type="submit" className="bg-primary-green py-2 px-6 rounded-md">
          {" "}
          Search
        </button>
      </form>
      {loading && <p className="text-center font-bold">Loading... </p>}
      {movies.length > 0 && <Movies movies={movies} />}
    </div>
  );
};

export default SearchView;
