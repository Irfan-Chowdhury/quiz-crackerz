import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({option, id, correctAnswer, handleResult}) => {

    const optionTitle = option.replace(/(<([^>]+)>)/ig, '');

    return (
        <div className="col-md-6 card mb-2 bg-info">
            <div className="card-body">
                <div className="form-check text-start">
                    <input className="form-check-input" type="radio" onClick={() => handleResult(optionTitle, correctAnswer)} name={id} />
                    <label className="form-check-label text-dark">
                        {optionTitle}
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Option;