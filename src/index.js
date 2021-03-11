import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Circles from './components/Circles';
import ImageReveal from './components/ImageReveal';


ReactDOM.render(
  <React.StrictMode>
    {/* <Circles /> */}
    <ImageReveal/>
  </React.StrictMode>,
  document.getElementById('root')
);

