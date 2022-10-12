import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const Statistics = () => {
    const quiz = useLoaderData();
    const topics = quiz.data;

    return (
        <div className='container'>
            <div className="card mt-3">
                <div className="card-body">
                    <h1>Statistics</h1>
                    <br />
                    <LineChart width={500} height={400} data={topics}>
                        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip></Tooltip>
                    </LineChart>
                </div>
            </div>

        </div>
    );
};

export default Statistics;