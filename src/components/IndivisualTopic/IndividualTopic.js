import React from 'react';

const IndividualTopic = ({topic}) => {
    const {id, name, logo, total} = topic;
    console.log(topic);
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
                            <button className="btn btn-primary">Start Practice</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndividualTopic;