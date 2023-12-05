import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import State from './components/Hooks/UseState/State'
import Effect from './components/Hooks/UseEffect/Effect'
import Context from './components/Hooks/UseContext/Context'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <State/>
    <Effect/>
    <Context/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();