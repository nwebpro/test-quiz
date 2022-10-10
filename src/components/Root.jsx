import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './Header';

export const QuizTopic = createContext([]);

const Root = () => {
    const quizData = useLoaderData();
    const quizs = quizData.data;

    return (
        <QuizTopic.Provider value={quizs}>
            <Header />
            <Outlet />
        </QuizTopic.Provider>
    );
};

export default Root;