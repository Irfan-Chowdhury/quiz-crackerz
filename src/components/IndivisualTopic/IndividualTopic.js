import React from 'react';
import { Link } from 'react-router-dom';

const IndividualTopic = ({topic}) => {
    const {id, name, logo, total} = topic;
    return (
        <div className="col">
            <div className="card">
                <img src={logo} alt=""/>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h5>{name} ({total})</h5>
                        </div>
                        <div>
                            <Link to={`/quiz/${id}`} className="btn btn-primary">Start Practice</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndividualTopic;