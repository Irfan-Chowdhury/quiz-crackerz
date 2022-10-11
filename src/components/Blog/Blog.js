import React from 'react';

const Blog = () => {
    return (
        <div className='container mt-5'>
            <div className="accordion text-start" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <b># What is the purpose of React Router  ?</b>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <b># How does context API works ?</b>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                            <br />
                            Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.
                            <br />
                            React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page
                            <br />
                            <br />
                            <b>Context API will replace redux?</b>
                            <br />
                            No. Well, not entirely.

                            Redux is great and came perfectly to answer the need for state management. Actually, it answered this need so well that it came to be known that you can't be a "true" React developer if you don't know your way around Redux. However, Redux has its disadvantages, and that's why it's important to know what Context API gives us that Redux doesn't:

                            Simplicity - When using redux people tend to manage almost all of their state in redux and it causes 2 problems:

                            Overhead - Why should I create/update 3 files just to add one tiny feature?
                            One of the significant advantages of React's one-way data binding is that it's easy to understand - A component passes state to its children. Using Redux takes it away from us.
                            Using Context API we can define several unrelated contexts (stores) and use each in its proper place in the app.

                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <b># About using of <i>useRef</i> Hook</b>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        The useRef Hook allows you to persist values between renders.
                        It can be used to store a mutable value that does not cause a re-render when updated.
                        It can be used to access a DOM element directly.
                        <br /><br />
                        <b>Does Not Cause Re-renders</b>
                        <br />
                        Does Not Cause Re-renders
                        useRef() only returns one item. It returns an Object called current.

                        When we initialize useRef we set the initial value: useRef(0).

                        It's like doing this: const count  We can access the count by using count.current.
                        <br /><br />
                       <b> Accessing DOM Elements</b>
                        In general, we want to let React handle all DOM manipulation.

                        But there are some instances where useRef can be used without causing issues.

                        In React, we can add a ref attribute to an element to access it directly in the DOM.
                        <br />
                        
                        <b>Tracking State Changes</b>
                        The useRef Hook can also be used to keep track of previous state values.

                        This is because we are able to persist useRef values between renders.

                        <br /><br />
                        This time we use a combination of useState, useEffect, and useRef to keep track of the previous state.

                        In the useEffect, we are updating the useRef current value each time the inputValue is updated by entering text into the input field.

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;