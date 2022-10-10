import React, { useContext } from 'react';
import Quiz from './Quiz';
import { QuizTopic } from './Root';

const Quizs = () => {
  const quizs = useContext(QuizTopic);
  return (
    <div className='grid gap-10 mx-auto lg:grid-cols-2 lg:max-w-screen-lg py-10'>
      {
        quizs.map(quiz => (
          <Quiz key={quiz.id} quiz={quiz} />
        ))
      }
    </div>
  );
};

export default Quizs;