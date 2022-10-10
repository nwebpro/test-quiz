import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizAwnser from './QuizAwnser';

const QuizTest = () => {
    const quizTestData = useLoaderData();
    const quizTest = quizTestData.data.questions;
    return (
        <div>
            {
                quizTest.map(qa => (
                    <QuizAwnser key={qa.id} qa={qa} />
                ))
            }
        </div>
    );
};

export default QuizTest;