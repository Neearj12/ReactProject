// src/components/ShowList.js
import React from 'react';
import { Link } from 'react-router-dom';

const ShowList = ({ shows }) => {
  return (
    <div className="flex flex-wrap -mx-4 justify-center mt-8">
      {shows.map((show) => (
        <div key={show.id} className="w-6 mt-4 h-9 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
          <div className="card bg-blue shadow-md rounded-lg overflow-hidden">
            <img
              src={show.image?.original}
              className="card-img-top object-cover w-full h-48"
              alt={show.name}
            />
            <div className="card-body text-center p-4">
              <h5 className="card-title text-4xl font-bold mb-2 text-blue">
                {show.show.name}
              </h5>
              <Link
                className="block text-blue-500 hover:underline"
                to={`/show/${show.show.id}`}
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
