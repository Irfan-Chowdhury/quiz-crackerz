import React from 'react';

const QuizTopic = () => {
    return (
        <div className="col">
            <div className="card">
                <img src="https://reactjs.org/logo-og.png" alt=""/>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <div>
                            <p>React</p>
                        </div>
                        <div>
                            <button className="btn btn-primary">Start Practice</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizTopic;