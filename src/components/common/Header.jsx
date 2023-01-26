import menuImg from "./../../assets/menu.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  //toggle menu
  const toggleMenu = () => {
    setMenuIsVisible((prevValue) => !prevValue);
  };
  return (
    <div className="bg-dark-light text-white py-4 sticky top-0 mb-6 z-20 mx-2 sm:mx-0">
      <ul className="flex items-center justify-between sm:justify-start container mx-auto space-x-10 text-primary-grey duration-500">
        <li className="text-white font-bold text-xl">MoviesHub</li>
        <li className="hidden sm:block">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-white font-semibold" : undefined
            }
          >
            Trending
          </NavLink>
        </li>
        <li className="hidden sm:block">
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive ? "text-white font-semibold" : undefined
            }
          >
            Search
          </NavLink>
        </li>
        <img
          src={menuImg}
          alt=""
          className="w-6 sm:hidden"
          onClick={toggleMenu}
        />
      </ul>
      {menuIsVisible && (
        <div className="border-t-2 border-t-dark p-4 duration-500 sm:hidden">
          <ul className="container mx-auto text-primary-grey duration-500">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-white font-semibold" : undefined
                }
                onClick={toggleMenu}
              >
                Trending
              </NavLink>
            </li>
            <li className="mt-4">
              <NavLink
                to="/search"
                className={({ isActive }) =>
                  isActive ? "text-white font-semibold" : undefined
                }
                onClick={toggleMenu}
              >
                Search
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
