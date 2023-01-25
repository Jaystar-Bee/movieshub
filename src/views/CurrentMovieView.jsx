import React from "react";
import img1 from "./../assets/img1.jpg";

const casts = [1, 2, 3, 4, 5, 5, 67, 8, 9, 9];
const CurrentMovieView = () => {
  return (
    <div className="container">
      <div className="flex gap-10">
        <img
          src={img1}
          alt=""
          className="h-[32rem] w-[22rem] rounded-md object-cover"
        />
        <div className="mt-20">
          <h1 className="font-extrabold mb-16 text-2xl">Avatar</h1>
          <p className="text-primary-grey">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quo
            cum itaque. Praesentium aliquam ipsa ea numquam! Tempora, ratione
            ducimus. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Veniam, ex dolor fuga ipsam deleniti harum aperiam voluptate ipsa
            dolore perferendis!
          </p>

          <p className="font-bold mt-3 text-primary-grey">
            Release Date: 2022-08-23
          </p>
          <button className="px-6 py-2 bg-primary-green rounded-md mt-8 text-dark">
            Play Trailer
          </button>
        </div>
      </div>

      {/* Cast List */}
      <div className="">
        <h2 className="my-10 font-bold  text-lg">Cast</h2>
        <ul className="flex gap-20 flex-wrap">
          {casts.map((cast) => {
            return (
              <li className="flex flex-col items-center max-w-[8rem]">
                <img
                  src={img1}
                  alt=""
                  className="w-24 h-24 rounded-full object-cover mb-3"
                />
                <p className="text-center leading-4">
                  This is the naew fewfef ewfwefwme
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CurrentMovieView;
