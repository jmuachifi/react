/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/

import { useState, useEffect, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";
import './App.css';
import Car from "./Car.js";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


const Header = () => {
  return (
    <>
      <h1 style={{ color: "red", backgroundColor:"lightblue" }}>
        Hello Style</h1>
      <p>Add a little style</p>
    </>
  );

}
const root1 = ReactDOM.createRoot(document.getElementById('my-style1'));
root1.render(<Header />);

const Header2 = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  return (
    <>
      <h1 style={myStyle}>
        Hello Style2</h1>
      <p>Add a little style2</p>
    </>
  );
}
const root2 = ReactDOM.createRoot(document.getElementById('my-style2'));
root2.render(<Header2 />);

const root3 = ReactDOM.createRoot(document.getElementById('my-style3'));
root3.render(<Car />);


//Hooks 
function FavoriteColor(){
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My Favorite Color is {color}</h1>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("yellow")}>Yellow</button>
    
    </>
  );
}
const root4 = ReactDOM.createRoot(document.getElementById('my-color1'));
root4.render(<FavoriteColor />);


// Create multiple states Hooks
function Car2(){
  const [color, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("2020");
  const [brand, setColor] = useState("red");

  return (
    <>
      <h1>My {brand}</h1>
      <p>It is a {color} {model} from {year}</p>
    </>
  )
}
const root5 = ReactDOM.createRoot(document.getElementById('my-car2'));
root5.render(<Car2 />);

//alternative way to create multiple states Hooks
/*
*Create a single Hook that holds an object:
*
unction Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);
*/

// useEffect Hook
function Timer(){
  const [count, setCount] = useState(0);

  useEffect(() => {
   let timer =  setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer)
  }, []); // <-- add empty brackets here

  return <h1>Ive rendered {count} times!</h1>;
  }
  const root6 = ReactDOM.createRoot(document.getElementById('my-timer'));
  root6.render(<Timer />);


  /**
   * Here is an example of a useEffect Hook that is dependent on a variable. 
   * If the count variable updates, the effect will run again:
   * 
   */
  function Timer2(){
    const [count, setCount] = useState(0);
    const [calculation , setCalculation] = useState(0);

    useEffect(() => {
      setCalculation(() => count * 2);
    },[count]); // <-- add the cout variable here

    return (
      <>
        <p>Count: {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
        <p>Calculation: {calculation}</p>
      </>
    );
  }
  const root7 = ReactDOM.createRoot(document.getElementById('my-timer2'));
  root7.render(<Timer2 />);

  //UserContext Hook
  const UserContext = createContext();
  function Component1(){
    const [user, setUser] = useState("Jesse Hall");

    return (
      <>
        <UserContext.Provider value={user}>
          <h1> {`Hello ${user}!`} </h1>
          <Component2 user={user} />
        </UserContext.Provider>
      </>
    );
  }
  function Component2(){
    return(
      <>
        <h1>Component2</h1>
        <Component3 />
      </>
    );
  }
  function Component3(){
    return(
      <>
        <h1>Component3</h1>
        <Component4 />
      </>
    );
  }
  function Component4(){
    return(
      <>
        <h1>Component4</h1>
        <Component5 />
      </>
    );
  }
  function Component5(){
    const user = useContext(UserContext);
    return(
      <>
        <h1>Component5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  }
  const root8 = ReactDOM.createRoot(document.getElementById('my-user-context'));
  root8.render(<Component1 />);