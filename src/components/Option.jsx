import React from 'react';

const Option = ({option, correctAnswers}) => {
    return (
        <div className="w-full text-sm font-medium text-left">
            <label className="form-control rounded-lg label cursor-pointer flex items-center p-4 focus:border-2 focus:border-indigo-400 border-2 border-gray-200">
                <input onClick={() => correctAnswers(option)}  type="radio" name="radio" className="radio checked:bg-indigo-600" />
                <p className='pl-5'>{option}</p>
            </label>
        </div>
    );
};

export default Option;