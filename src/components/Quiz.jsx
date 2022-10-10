import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({quiz}) => {
    const {id, name, logo, total} = quiz;
    return (
        <div className="bg-[#f1f1f1] grid sm:grid-cols-3 rounded border transition-all hover:border-indigo-600 p-5">
              <div className="relative w-full h-48 max-h-full sm:h-auto">
                <img
                  className="absolute object-cover w-full h-full rounded"
                  src={logo}
                  alt="Person"
                />
              </div>
              <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                <p className="text-lg font-bold mb-2">{name}</p>
                <div className='mb-3'>
                  <span className="rounded-full border border-current px-5 py-1.5 text-[10px] uppercase tracking-wide text-indigo-500">Total Quation: <span className='font-bold text-sm'>{total}</span></span>
                </div>
                <div>
                  <Link to={`/quiz/${id}`}>
                  <button className='inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white focus:outline-none active:bg-indigo-500'>Start Quiz</button>
                  </Link>
                </div>
              </div>
            </div>
    );
};

export default Quiz;