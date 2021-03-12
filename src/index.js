import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Circles from './components/Circles';
import ImageReveal from './components/ImageReveal';
import Slider from './components/Slider';


ReactDOM.render(
  <React.StrictMode>
    {/* <Circles /> */}
    {/* <ImageReveal/> */}
    <Slider/>
  </React.StrictMode>,
  document.getElementById('root')
);

