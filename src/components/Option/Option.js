import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({option, id, correctAnswer}) => {

    const optionTitle = option.replace(/(<([^>]+)>)/ig, '');

    const handleResult = (optionTitle) => {
        if(optionTitle===correctAnswer){
            toast("Correct Answer");
        }else{
            toast("Wrong Answer");
        }
    }

    return (
        <div className="col-md-6 card mb-2">
            <div className="card-body">
                <div className="form-check text-start">
                    <input className="form-check-input" type="radio" onClick={() => handleResult(optionTitle)} name={id} />
                    <label className="form-check-label">
                        {optionTitle}
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Option;