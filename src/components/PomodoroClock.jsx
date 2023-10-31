import React, { useState, useEffect } from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import ProgressProvider from "./ProgressProvider";

const PomodoroClock = () => {
  const initialMinute = 10;
  const initialSeconds = 0;
  const [progress, setProgress] = useState(100);

  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
        // setProgress(Math.round(((((minutes * 60)  - 1) / (initialMinute * 60)) * 100)));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        }
        else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div>
      {minutes === 0 && seconds === 0 ? null : (
        // : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1>
        <>
          <div className="center">
            <div className="clock-holder center">
              <div className="clock">
                {/* <CircularProgressbarWithChildren value={progress}>
            <div className="time">
              <p>25:00</p>
            </div>
          </CircularProgressbarWithChildren> */}

                <ProgressProvider valueStart={100} valueEnd={progress}>
                  {() => (
                    <CircularProgressbarWithChildren value={progress}>
                      <div className="time">
                        <p>
                          {" "}
                          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                        </p>
                      </div>
                    </CircularProgressbarWithChildren>
                  )}
                </ProgressProvider>
              </div>

              <div className="play-btn center">
                <button>
                  <img src="play-button-svgrepo-com.svg" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PomodoroClock;
