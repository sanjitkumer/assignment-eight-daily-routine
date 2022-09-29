import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
           <div>
           <h3>1. What is React and how its work?</h3>
            <p>Ans:React is a declarative, efficient, and flexible JavaScript library for building user interfaces. 'V' denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.</p>
           </div>

           <div>
           <h3>2. What is the differences between props and state?</h3>
            <p>Ans:State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props. </p>
           </div>

           <div>
           <h3>3. what is the purpose of useEffect hook?</h3>
            <p>Ans: The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments.</p>
           </div>
        </div>
    );
};

export default Question;