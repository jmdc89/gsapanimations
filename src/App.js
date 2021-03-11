import React, {useRef, useEffect} from 'react';
import './App.css';
import {TweenMax, Power3} from 'gsap';

function App() {
 

  return (
    <div className="App">
      <header className="App-header">
          <div className="circle-container">
              <div className="circle"></div>
              <div className="circle red"></div>
              <div className="circle blue"></div>
          </div>
      </header>
    </div>
  );
}

export default App;
