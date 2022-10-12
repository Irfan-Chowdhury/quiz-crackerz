import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal, Button } from "react-bootstrap";

import React, { useState } from 'react';
import Option from '../Option/Option';

const Questions = ({ questionItems, sl_no, handleResult }) => {
    const { id, question, options, correctAnswer } = questionItems;

    const [showModal, setShow] = useState(false);
    const [showCorrectAnswer, setCorrectAnswer] = useState('');


    const handleClose = () => setShow(false);
    const handleCorrectAnswer = (correctAnswer) => {
        setShow(true);
        setCorrectAnswer(correctAnswer)
    }

    
    return (
        <div className="card mt-5">
            <div className="card-body">
                <div className="mb-3 d-flex justify-content-evenly">
                    <div></div>
                    <div><h5>Quiz-{sl_no}: {question.replace(/(<([^>]+)>)/ig, '')}</h5></div>
                    <div onClick={() => handleCorrectAnswer(correctAnswer)}>
                        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                        <ToastContainer></ToastContainer> </div>
                </div>
                <div className="row">
                    {
                        options.map(option => <Option id={id} option={option} handleResult={handleResult} correctAnswer={correctAnswer}></Option>)
                    }
                </div>
            </div>

            {/* Show Correct Answer Modal */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Correct Answer is: </Modal.Title>
                </Modal.Header>
                <Modal.Body>{showCorrectAnswer.replace(/(<([^>]+)>)/ig, '')}</Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>

        </div>
    );
};

export default Questions;