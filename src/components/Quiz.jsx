import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({quiz}) => {
    const {id, name, logo, total} = quiz;
    return (
        <div className="grid sm:grid-cols-3 rounded shadow p-5">
              <div className="relative w-full h-48 max-h-full sm:h-auto">
                <img
                  className="absolute object-cover w-full h-full rounded"
                  src={logo}
                  alt="Person"
                />
              </div>
              <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                <p className="text-lg font-bold">{name}</p>
                <p className="mb-4 text-xs text-gray-800">Total Quation: {total}</p>
                <Link to={`/quiz/${id}`} className='bg-black text-white'>
                Start Quiz
                </Link>
              </div>
            </div>
    );
};

export default Quiz;