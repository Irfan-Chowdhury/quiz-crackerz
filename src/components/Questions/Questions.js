
import React from 'react';
import Option from '../Option/Option';

const Questions = ({questionItems, increment, key}) => {
    const {id, question, options,correctAnswer} = questionItems;

    return (
        <div className="card mt-5">
            <div className="card-body">
                <div className="mb-3 d-flex justify-content-evenly">
                    <div></div>
                    <div><h5>Quiz-{increment}: {question.replace(/(<([^>]+)>)/ig, '')}</h5></div>
                </div>
                <div className="row">
                    {
                        options.map(option => <Option id={id} option={option}></Option>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Questions;