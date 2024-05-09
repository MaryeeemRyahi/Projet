import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
 

const welcome={
  greeting:"Hey",
  titile:"React",
};
function getTitle(title){
return title;}
  function App(){
    const Title="React";
   
    return ( 
    <div>
      <h1>Hello World  </h1>
      <h1>
        {welcome.greeting}{welcome.title}
      </h1>
      <h1> Hello {Title}</h1>
      <h1>Hello{getTitle("React")}</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type ="text"></input>

    </div>
)};



export default App




