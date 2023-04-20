import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; 

const red = '#f54e4e'
const green = '#4aec8c'

const Timer = (props) =>  {
    return (
    <div>
        <CircularProgressbar value={60} text={`60%`} styles={buildStyles( {rotation, strokeLinecap,textColor, textSize, pathTransition, pathTransitionDuration, trailColor, backgroundColor,
           textColor: '#fff',
           pathColor: red,
           tailColor: 'rgba(255, 255, 255,.2)',
        })} />
    </div>
    )
}
export default Timer