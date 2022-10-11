import React, { useContext } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { QuizTopic } from './Root';

const Statistics = () => {
  const quizs = useContext(QuizTopic);

    return (
        <section className="px-5 py-10 md:py-20 lg:py-40 flex items-center justify-center bg-gray-50">
            <div className="w-[100%] lg:w-[600px] h-[300px] bg-white p-6 shadow-xl rounded-lg">
                <ResponsiveContainer>
                    <LineChart width={600} height={300} data={quizs} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="total" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
};

export default Statistics;

