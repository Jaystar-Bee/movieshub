import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-dark-light">
      <ul>
        <li>MoviesHub</li>
        <NavLink to="/">
          <li>Trending</li>
        </NavLink>
        <NavLink to="/movies">
          <li>Movies</li>
        </NavLink>
        <NavLink to="/series">
          <li>TV Series</li>
        </NavLink>
        <NavLink to="/search">
          <li>Search</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
