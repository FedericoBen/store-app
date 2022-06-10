import React from 'react';
import ReactDOM from 'react-dom/client';


import './index.css';

import { StoreApp } from "./StoreApp";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreApp/>
  </React.StrictMode>
);
