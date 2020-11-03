import React, { useRef, useEffect, useState } from "react";
import "./App.css";

import { TweenMax, Power3 } from "gsap";

function App() {
  let app = useRef(null);
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);

  const [state, setState] = useState(false);

  const HandleExpand = () => {
    TweenMax.to(circleRed, 0.8, {
      height: 200,
      width: 200,
      ease: Power3.easeOut,
    });
    setState(true);
  };

  const HandleShrink = () => {
    TweenMax.to(circleRed, 0.8, {
      height: 75,
      width: 75,
      ease: Power3.easeOut,
    });
    setState(false);
  };

  useEffect(() => {
    TweenMax.to(app, 0, { css: { visibility: "visible" } });
    // TweenMax.from(circle, 0.8, { opacity: 0, x: 40, ease: Power3.easeOut });
    // TweenMax.from(circleRed, 0.8, { opacity: 0, x: 40, ease: Power3.easeOut, delay: 0.2 });
    // TweenMax.from(circleBlue, 0.8, { opacity: 0, x: 40, ease: Power3.easeOut, delay: 0.4 });
    TweenMax.staggerFrom(
      [circle, circleRed, circleBlue],
      0.8,
      { opacity: 0, x: 40, ease: Power3.easeOut },
      0.2
    );
  }, []);

  return (
    <div ref={(el) => (app = el)} className="App">
      <header className="App-header">
        <div className="circle-container">
          <div ref={(el) => (circle = el)} className="circle"></div>
          <div
            onClick={state !== true ? HandleExpand : HandleShrink}
            ref={(el) => (circleRed = el)}
            className="circle red"
          ></div>
          <div ref={(el) => (circleBlue = el)} className="circle blue"></div>
        </div>
      </header>
    </div>
  );
}

export default App;
