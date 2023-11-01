import React, { useState, useEffect } from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import ProgressProvider from "./ProgressProvider";

const OneHourClock = () => {

    const resetBtn = () => {
    setMinutes(60);
    setSeconds(0);
    setProgress(100);
  }

  const initialMinute = 60;
  const initialSeconds = 0;
  const [isPaused, setIsPaused] = useState(true);
  const [progress, setProgress] = useState(100);

  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (isPaused) {
        return;
      }
      if (seconds > 0) {
        setSeconds(seconds - 1);
        setProgress(
          Math.round(
            ((minutes * 60 + seconds - 1) / (initialMinute * 60)) * 100
          )
        );
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
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
        <>
          <div className="center">
            <div className="clock-holder center">
              <div className="clock">
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
                {isPaused ? (
                  <button onClick={() => setIsPaused(false)}>
                    <img src="play-button-svgrepo-com.svg" />
                  </button>
                ) : (
                  <button onClick={() => setIsPaused(true)} >
                    <img src="pause-svgrepo-com.svg" alt="" />
                  </button>
                )}
                <button onClick={() => resetBtn()} disabled={!isPaused} className="reset">
                  <img src="reset-svgrepo-com.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default OneHourClock;
