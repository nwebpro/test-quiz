import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizAnswer from './QuizAnswer';

const QuizTest = () => {
    const quizTestData = useLoaderData();
    const quizTest = quizTestData.data.questions;

    const {data} = quizTestData;

    return (
        <div className='my-20 px-5 lg:px-0'>
            <p className='text-center mb-5 text-2xl font-bold'>Quiz of {data.name}</p>
            {
                quizTest.map((qa, index) => (
                    <QuizAnswer key={qa.id} qa={qa} index={index} />
                ))
            }
        </div>
    );
};

export default QuizTest;