import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

const myFirstElement =  <h1 className='text text-center'>Hello React!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( myFirstElement );

//h1>Array Methods</h1>
const myArray = ['apple', 'banana', 'orange'];
const myList = myArray.map(item => <p>{item}</p>);
ReactDOM.render(myList, document.getElementById('root'));


 /*root.render( <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
