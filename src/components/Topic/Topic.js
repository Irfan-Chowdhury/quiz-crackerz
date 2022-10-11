import React from 'react';
import { useLoaderData } from 'react-router-dom';
import IndividualTopic from '../IndivisualTopic/IndividualTopic';

const Topic = () => {
    const quiz = useLoaderData();
    const topics = quiz.data;


    return (
        <div>
            {/* Banner */}
            <section>
                <div class="container mt-5">
                    <div class="card mb-3">
                        <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFubmVyJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80" height="300px" className="card-img-top" alt="" />
                    </div>
                </div>
            </section>

            {/* Card */}
            <section>
                <div className="container mb-5">
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {
                            topics.map( topic => <IndividualTopic topic={topic}></IndividualTopic> )
                        }
                        
                    </div> 
                </div>
            </section>
        </div>
    );
};

export default Topic;