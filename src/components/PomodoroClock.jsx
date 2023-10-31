import React, {useState, useEffect} from "react";
import { CircularProgressbar, CircularProgressbarWithChildren } from "react-circular-progressbar";
import ProgressProvider from "./ProgressProvider";

const PomodoroClock = () => {
  const [progress, setProgress] = useState(100);
  const initialMinute = 25;
  const initialSeconds = 0;
    const [ minutes, setMinutes ] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <div>
        { minutes === 0 && seconds === 0
            ? null
            : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        }
        </div>
    )
  // return (
  //   <div className="center">
  //     <div className="clock-holder center">
  //       <div className="clock">
  //         {/* <CircularProgressbarWithChildren value={progress}>
  //           <div className="time">
  //             <p>25:00</p>
  //           </div>
  //         </CircularProgressbarWithChildren> */}

  //         <ProgressProvider valueStart={10} valueEnd={progress} >
  //         {value => <CircularProgressbar value={value} text={`${value}%`} />}
  //       </ProgressProvider>
  //       </div>

  //       <div className="play-btn center">
  //         <button onClick={() => setProgress(10)}>
  //           <img src="play-button-svgrepo-com.svg" />
  //         </button>
  //       </div>
  //     </div>
  //   </div>
    
  // );
};

export default PomodoroClock;
