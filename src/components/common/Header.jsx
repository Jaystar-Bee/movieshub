import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-dark-light text-white py-4 sticky top-0 mb-6 z-20">
      <ul className="flex items-center container mx-auto space-x-10 text-primary-grey duration-500">
        <li className="text-white font-bold text-xl">MoviesHub</li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-white font-semibold" : undefined
          }
        >
          <li>Trending</li>
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive ? "text-white font-semibold" : undefined
          }
        >
          <li>Movies</li>
        </NavLink>
        <NavLink
          to="/series"
          className={({ isActive }) =>
            isActive ? "text-white font-semibold" : undefined
          }
        >
          <li>TV Series</li>
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive ? "text-white font-semibold" : undefined
          }
        >
          <li>Search</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
