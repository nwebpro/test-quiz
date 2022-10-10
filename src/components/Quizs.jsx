import React, { useContext } from 'react';
import Quiz from './Quiz';
import { QuizTopic } from './Root';

const Quizs = () => {
  const quizs = useContext(QuizTopic);
  return (
    <div className='grid gap-10 mx-auto md:grid-cols-2 md:max-w-screen-lg my-10 p-5 lg:p-0'>
      {
        quizs.map(quiz => (
          <Quiz key={quiz.id} quiz={quiz} />
        ))
      }
    </div>
  );
};

export default Quizs;