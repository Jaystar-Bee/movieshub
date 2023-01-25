import { BrowserRouter, Routes, Route } from "react-router-dom";

import TrendingView from "./../views/TrendingView";
import SearchView from "./../views/SearchView";
import ErrorView from "./../views/ErrorView";
import Header from "../components/common/Header";
import CurrentMovieView from "../views/CurrentMovieView";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<TrendingView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/:name/:id" element={<CurrentMovieView />} />
        <Route path="*" element={<ErrorView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
