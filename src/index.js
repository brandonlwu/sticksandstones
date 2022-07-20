import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
export const stick1 = require('./assets/stick1.png')
export const stick2 = require('./assets/stick2.png')
export const stick3 = require('./assets/stick3.png')
export const stick4 = require('./assets/stick4.png')
export const stick5 = require('./assets/stick5.png')
export const stick6 = require('./assets/stick6.png')
export const stick7 = require('./assets/stick7.png')
export const stick8 = require('./assets/stick8.png')
export const stick9 = require('./assets/stick9.png')
export const stick10 = require('./assets/stick10.png')
export const stick11 = require('./assets/stick11.png')
export const stick12 = require('./assets/stick12.png')
export const stick13 = require('./assets/stick13.png')
export const stick14 = require('./assets/stick14.png')
export const stick15 = require('./assets/stick15.png')
export const dog = require('./assets/dog.png')
export const dogsad = require('./assets/dogsad.png')
export const dogwagging = require('./assets/dogwagging.png')
export const bone = require('./assets/bone.png')
export const stickArr = [stick1, stick2, stick3, stick4,
stick5, stick6, stick7, stick8, stick9, stick10, stick11,
stick12, stick13, stick14, stick15]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
