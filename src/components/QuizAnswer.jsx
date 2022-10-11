import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizAnswer = ({qa, index}) => {
    const {question, options, correctAnswer} = qa;

    const correctAnswers = (option) => {
        if(option === correctAnswer){
            toast.success('Your answer is correct!', {autoClose: 500});
        }else{
            toast.error('Your answer is incorrect!', {autoClose: 500});
        }
    }

    const showCorrectAnswer = () => {
        toast.success(`${correctAnswer}`, {autoClose: 100});
    }


    return (
        <div className='max-w-xl sm:mx-auto lg:max-w-2xl mb-5 bg-[#f1f1f1] p-10 rounded relative'>
            <ToastContainer position="top-center" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <div className='absolute right-3 top-3'>
                <button onClick={showCorrectAnswer}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>

            </div>
            <div>
                <p className='text-center mb-5'><span>{index + 1}.</span> {question}</p>
                <div>
                    <ul className='grid grid-cols-1 gap-3'>
                        {
                            options.map(option => (
                                <div className="w-full text-sm font-medium text-left">
                                    <label className="form-control rounded-lg label cursor-pointer flex items-center p-4 focus:border-2 focus:border-indigo-400 border-2 border-gray-200">
                                        <input onClick={() => correctAnswers(option)}  type="radio" name="radio" className="radio checked:bg-indigo-600" />
                                        <p className='pl-5'>{option}</p>
                                    </label>
                                </div>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default QuizAnswer;