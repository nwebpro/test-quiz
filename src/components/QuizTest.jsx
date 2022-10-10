import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizTest = () => {
    const quizTestData = useLoaderData();
    const quizTest = quizTestData.data.questions;
    const {question} = quizTest;
    return (
        <div>
            
        </div>
    );
};

export default QuizTest;