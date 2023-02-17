import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const fruits = ["Apples", "Banana", "Orange", "Apricot", "Black rowan", "Cranberry"];

root.render(
  <div>
    <h1>List of fruits</h1>
    <ul>
      {fruits.map(item=>(
        <li>{item}</li>
      ))}
    </ul>
  </div>
)