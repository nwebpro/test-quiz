import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export const QuizTopic = createContext([]);

const Root = () => {
    const quizData = useLoaderData();
    const quizs = quizData.data;

    return (
        <QuizTopic.Provider value={quizs}>
            <Header />
            <Outlet />
            <Footer />
        </QuizTopic.Provider>
    );
};

export default Root;