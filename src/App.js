import React, {useRef, useEffect} from 'react';
import './App.css';
import {TweenMax, Power3} from 'gsap';

function App() {
  let app = useRef(null)
  let circle = useRef(null)
  let circleRed = useRef(null)
  let circleBlue = useRef(null)

  useEffect(() => {
    TweenMax.to(app, 0, {css: {visibility: 'visible'}})
    TweenMax.from(circle, .8, {opacity:0, x:40, ease: Power3.easeOut})
    TweenMax.from(circleRed, .8, {opacity:0, x:40, ease: Power3.easeOut, delay: .2})
    TweenMax.from(circleBlue, .8, {opacity:0, x:40, ease: Power3.easeOut, delay: .4})
  }, [])

  return (
    <div
    ref={el => app = el} 
    className="App">
      <header className="App-header">
          <div className="circle-container">
              <div
              ref={el => circle = el}
              className="circle"></div>
              <div
              ref={el => circleRed = el}
              className="circle red"></div>
              <div
              ref={el => circleBlue = el}
              className="circle blue"></div>
          </div>
      </header>
    </div>
  );
}

export default App;
