import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {
    const quizInfo = useLoaderData();
    const {id, name, total, logo, questions} = quizInfo.data;
    let increment = 1;

    return (
        <div className='container'>
            <section className="mt-4">
                <div className="card" style={{borderStyle:'none'}}>
                    <div className="card-body text-center">
                        <h2>Quiz of {name}</h2>
                        <hr />
                    </div>
                </div>
            </section>

            <br />
            
            {
                questions.map(questionItems => <Questions key={id} increment={increment++} questionItems={questionItems} ></Questions>)
            }

        </div>
    );
};

export default Quiz;