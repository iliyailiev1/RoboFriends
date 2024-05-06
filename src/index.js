import React from 'react';
import ReactDOM from 'react-dom'; 
import { createRoot } from "react-dom/client";
import './index.css';
import App from './containers/App';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';


// If you want your app to work offline and load faster, you can change
// uncomment the line below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker();
ReactDOM.render(<App/> , document.getElementById('root'));
