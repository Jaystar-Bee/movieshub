import React from "react";
import { Link } from "react-router-dom";

const ErrorView = () => {
  return (
    <div className="text-center flex items-center justify-center h-[88vh]">
      <div>
        <h2 className="text-3xl font-extrabold">404 ERROR PAGE</h2>
        <p className="text-lg mt-20">
          You're in the wrong page, please click{" "}
          <span className="text-primary-green font-bold">
            <Link to="/">here to safe place</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ErrorView;
