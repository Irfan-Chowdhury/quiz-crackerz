import React from 'react';

const Sidebar = ({total, totalCorrectAnswer, totalWrongAnswer}) => {
    return (
        <div className="card mt-5" style={{position:'sticky',top:0}}>
            <div className="card-body p-5">
                <h5 className='text-start'>Total Question: {total}</h5>
                <h5 className='text-start'>Correct Ans: {totalCorrectAnswer.length}</h5>
                <h5 className='text-start'>Wrong Ans: {totalWrongAnswer.length}</h5>
            </div>
        </div>
    );
};

export default Sidebar;