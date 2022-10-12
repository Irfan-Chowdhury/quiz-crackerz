import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import Questions from '../Questions/Questions';
import Sidebar from '../Sidebar/Sidebar';

const Quiz = () => {
    const quizInfo = useLoaderData();
    const {id, name, total, questions} = quizInfo.data;
    let sl_no = 1;

    const [totalCorrectAnswer, setTotalCorrectAnswer] = useState([]);
    const [totalWrongAnswer, setTotalWrongAnswer]     = useState([]);

    const handleResult = (optionTitle, correctAnswer) => {
        if(optionTitle===correctAnswer){
            const newCorrectAns = [...totalCorrectAnswer, 1];
            setTotalCorrectAnswer(newCorrectAns);
            toast("Correct Answer");
        }else{
            const newWrongAns = [...totalWrongAnswer, 1];
            setTotalWrongAnswer(newWrongAns);
            toast("Wrong Answer");
        }
    }

    return (
        <div className='container'>
            <section className="mt-4">
                <div className="card" style={{borderStyle:'none'}}>
                    <div className="card-body text-center">
                        <h2>Quiz of {name}</h2>
                    </div>
                </div>
            </section>

            <br />

            <div className='row'>
                <div className="col-md-9">            
                    {
                        questions.map(questionItems => <Questions key={id} handleResult={handleResult} sl_no={sl_no++} questionItems={questionItems}></Questions>)
                    }
                </div>
                <div className="col-md-3">  
                    <Sidebar total={total} totalCorrectAnswer={totalCorrectAnswer} totalWrongAnswer={totalWrongAnswer}></Sidebar>
                </div>
            </div>

        </div>
    );
};

export default Quiz;