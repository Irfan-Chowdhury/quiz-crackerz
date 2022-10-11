import React from 'react';

const Option = ({option, id}) => {

    return (
        <div className="col-md-6 card mb-2">
            <div className="card-body">
                <div className="form-check text-start">
                    <input className="form-check-input" type="radio" name={id} />
                    <label className="form-check-label">
                        {option.replace(/(<([^>]+)>)/ig, '')}
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Option;