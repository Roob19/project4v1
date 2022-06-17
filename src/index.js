import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from "./pages/App/App";
import _ from 'lodash';

// var ReactDOM = require('react-dom/client');

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './pages/App/App';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <Router>
//     <React.StrictMode>
//       <Route render={({history}) => <App history={history} />} />
//     </React.StrictMode>
//   </Router>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
