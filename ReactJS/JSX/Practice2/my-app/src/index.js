import React from 'react';
import ReactDom from 'react-dom/client';

const root = ReactDom.createRoot(document.getElementById('root'));

const name = 'Truong Van Nam';

root.render(
  <h1 style={{textAlign:"center"}}>
    {name}
  </h1>
) 
