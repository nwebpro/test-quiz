import React from 'react';

const QuizAnswer = ({qa}) => {
    const {question, options, correctAnswer} = qa;

    const correctAnswers = (option) => {
        if(option === correctAnswer){
            // alert('hello');
        }else{
            // alert('wrong!');
        }
    }
    return (
        <div className='max-w-xl sm:mx-auto lg:max-w-2xl mb-5 bg-[#f1f1f1] p-10 rounded'>
            <div>
                <h1 className='text-center mb-5'>{question}</h1>
                <div>
                    <ul className='grid grid-cols-1 gap-3'>
                        {
                            options.map(option => (
                                <div>
                                    <button className='w-full cursor-pointer rounded-lg border-2 border-gray-200 p-4 text-sm font-medium text-left focus:border-2 focus:border-indigo-400' onClick={() => correctAnswers(option)}>{option}</button>
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