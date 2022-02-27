import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from './Main';
import {BrowserRouter as Router} from "react-router-dom"


//THIS ADDS THE ELEMENT WE CREATE AND ADD THEMTO THE PAGE
//First parameter is the argument we want to create
//Second argument is where we want ot inhect the code
// ReactDOM.render(
//   React.createElement("h1", {style: {color: "blue"}}, "This is my H1"),
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <ul>
//     <li>Monday</li>
//     <li>Tuesday</li>
//     <li>Wednesday</li>
//     <li>Thursday</li>
//   </ul>
//       ,    
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <App />
//       ,    
//   document.getElementById('root')
// );

function Main2()
{
  return <h1>Testing fragments</h1>
}


ReactDOM.render(
  <Router>
    <> 
      <Main  />
      <Main2 />
    </>
  </Router>
      ,    
  document.getElementById('root')
);
