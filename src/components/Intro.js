// A "View" component if MVC
//<Header>
//Story intro
//Preliminary graphics
//"Start Game" Button

import React from 'react';
import Header from './Header';
import {animated, useTrail} from 'react-spring';
import './styles.css';
import { Button } from 'react-bootstrap';

const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

function Intro() {
  const [trail, set] = useTrail(3, () => ({ xy: [0, 0], config: i => (i === 0 ? fast : slow) }))

  return(
    <>
      <Header />
      <p>This choose-your-own-adventure follows the day in the life of an Epicodus student.</p>
        {/* <Button onClick={()=> goToScreen()}></Button> */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
        </filter>
      </svg>
      <div className="hooks-main" onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}>
        {trail.map((props, index) => (
          <animated.div key={index} style={{ transform: props.xy.interpolate(trans) }} />
        ))}
      </div>
    </>
  )
}

export default Intro;