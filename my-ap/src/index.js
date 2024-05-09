import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
 


   

const title = "React";
const welcome = {
  greeting: "Hey",
  title: "React",
}
const list = [
  {
    title: "React",
    url: "https://reactjs.org",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,

  }
];
/*function getTitle(title){
  return title;
}*/
function App() {
  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);



  return (
    <>
      <h1>My Hacker Stories {title}</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type='text' />
      <hr />


      <ul>
        {list.map(function (item) {

          return (
            <li key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </li>
          );
        })}
      </ul>


    </>

  );

}



export default App




