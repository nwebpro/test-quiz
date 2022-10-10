import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizAwnser from './QuizAnswer';

const QuizTest = () => {
    const quizTestData = useLoaderData();
    const quizTest = quizTestData.data.questions;
    return (
        <div className='my-20'>
            {
                quizTest.map(qa => (
                    <QuizAwnser key={qa.id} qa={qa} />
                ))
            }
        </div>
    );
};

export default QuizTest;