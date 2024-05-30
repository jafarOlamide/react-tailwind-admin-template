import React from "react";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-64 text-center ml-auto">
      <h1 className="text-red-500 text-3xl mb-4">
        Sorry, the page you are looking for does not exist!
      </h1>
      <button onClick={() => navigate(-1)} className="bg-red-200">
        <span className="text-white">Go Back</span>
      </button>
    </div>
  );
};

export default Error404;
