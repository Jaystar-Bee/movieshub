import React, { useEffect, useState } from "react";
import Modal from "../components/common/Modal";
import request from "../axios";
import { useParams } from "react-router-dom";

const CurrentMovieView = () => {
  const id = useParams().id;
  const type = useParams().name;

  const [movie, setMovie] = useState({});
  useEffect(() => {
    request.get(`/${type}/k_1g468mcp/${id}`).then((res) => {
      setMovie(res.data);
    });
  }, []);

  const [modalIsVisible, setModal] = useState(false);

  const toggleModal = () => {
    setModal((prevValue) => !prevValue);
  };

  return (
    <>
      {modalIsVisible && (
        <Modal
          close={toggleModal}
          link={movie?.trailer}
          title={movie?.fullTitle}
        />
      )}
      <div className="container pb-20 mx-4 sm:mx-0">
        <div className="flex gap-10 flex-col md:flex-row ">
          <img
            src={movie?.image}
            alt=""
            className="h-[26rem] sm:h-[32rem] w-[18rem] sm:w-[22rem] rounded-md object-cover"
          />
          <div className="mt-20">
            <h1 className="font-extrabold mb-16 text-lg sm:text-2xl">
              {movie?.fullTitle || movie?.name}
            </h1>
            <p className="text-primary-grey">{movie?.plot || movie?.summary}</p>

            {/* show release date only it is a movie */}
            {movie?.id?.includes("tt") > 0 && (
              <p className="font-bold mt-3 text-primary-grey">
                Release Date: {movie?.releaseDate}
              </p>
            )}
            {/* play trailer only it is a movie */}
            {movie?.id?.includes("tt") > 0 && (
              <button
                className="px-6 py-2 bg-primary-green rounded-md mt-8 text-dark text-lg font-semibold"
                onClick={toggleModal}
              >
                Play Trailer
              </button>
            )}
          </div>
        </div>

        {/* Cast List */}
        <div className="">
          {movie?.actorList?.length > 0 && (
            <h2 className="my-10 font-bold text-xl">Cast</h2>
          )}
          <ul className="flex gap-20 flex-wrap">
            {movie?.actorList?.map((cast) => {
              return (
                <li
                  className="flex flex-col items-center max-w-[8rem]"
                  key={cast?.id}
                >
                  <img
                    src={cast?.image}
                    alt=""
                    className="w-24 h-24 rounded-full object-cover mb-3"
                  />
                  <p className="text-center leading-4">{cast?.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CurrentMovieView;
