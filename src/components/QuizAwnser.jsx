import React from 'react';

const QuizAwnser = ({qa}) => {
    const {question, options, correctAnswer} = qa;

    const correctAnswers = (option) => {
        if(option === correctAnswer){
            alert('hello');
        }else{
            alert('wrong!');
        }
    }
    return (
        <div>
            <h1>{question}</h1>
            <div>
                <ul>
                    {
                        options.map(option => (
                            <div>
                                <button onClick={() => correctAnswers(option)}>{option}</button>
                            </div>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default QuizAwnser;