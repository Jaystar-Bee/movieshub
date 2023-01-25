import React from "react";

import img1 from "./../../assets/img1.jpg";
import img2 from "./../../assets/img2.jpg";
import img3 from "./../../assets/img3.jpg";
import img4 from "./../../assets/img4.jpg";
import img5 from "./../../assets/img5.jpg";
import img6 from "./../../assets/img1.jpg";
import img7 from "./../../assets/img7.jpg";
import img8 from "./../../assets/img8.jpg";
import { Link } from "react-router-dom";

const SingleMovie = (props) => {
  return (
    <Link to={`/${props.type}/${props.id}`}>
      <div className="w-[17rem] min-w-[14rem] p-4 rounded-md bg-dark-light flex-1 sm:flex-auto hover:scale-[1.05] duration-500">
        <img
          src={props.image}
          alt=""
          className="h-[20rem] object-cover w-full"
        />
        <p className="text-center font-bold mt-4 text-xl">{props.title}</p>
      </div>
    </Link>
  );
};

export default SingleMovie;
