import React, { useState, useEffect } from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import ProgressProvider from "./ProgressProvider";

const CustomClock = () => {
  const resetBtn = () => {
    setMinutes(0);
    setSeconds(0);
    setProgress(100);
  };

  const add10 = () => {
    setMinutes(minutes + 10);
  };
  const sub10 = () => {
    if (minutes < 0) {
      alert("Invalid time");
      setMinutes(0);
      setSeconds(0);
      setProgress(100);
    } else {
      setMinutes(minutes - 10);
    }
  };

  const add5 = () => {
    setMinutes(minutes + 5);
  };
  const sub5 = () => {
    if (minutes < 0) {
      alert("Invalid time");
      setMinutes(0);
      setSeconds(0);
    } else {
      setMinutes(minutes - 5);
    }
  };

  const initialSeconds = 0;
  const initialMinute = 0;
  const [isPaused, setIsPaused] = useState(true);
  const [progress, setProgress] = useState(100);

  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (isPaused) {
        return;
      }
      if (minutes < 0) {
        setProgress(100);
        setMinutes(0);
        setSeconds(0);
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
        } else if (seconds > 0 && minutes < 0) {
          alert("Invalid time!");
          setMinutes(0);
          setSeconds(0);
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
      <>
        <div className="center">
          <div className="clock-holder center">
            <div className="clock">
              <ProgressProvider valueStart={100} valueEnd={progress}>
                {() => (
                  <CircularProgressbarWithChildren value={progress}>
                    <div className="time custom-clock">
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
                <button onClick={() => setIsPaused(true)}>
                  <img src="pause-svgrepo-com.svg" alt="" />
                </button>
              )}
              <button
                onClick={() => resetBtn()}
                disabled={!isPaused}
                className="reset"
              >
                <img src="reset-svgrepo-com.svg" alt="" />
              </button>
            </div>
            <div className="switch center">
              <div className="tenMin">
                <button
                  className="up"
                  onClick={() => add10()}
                  disabled={!isPaused}
                >
                  <img src="round-arrow-up-svgrepo-com.svg" alt="" />
                  <p>+10</p>
                </button>
                <button
                  className="down"
                  onClick={() => sub10()}
                  disabled={!isPaused}
                >
                  <img src="round-arrow-down-svgrepo-com.svg" alt="" />
                  <p>-10</p>
                </button>
              </div>
              <div className="fiveMin">
                <button
                  className="up"
                  onClick={() => add5()}
                  disabled={!isPaused}
                >
                  <img src="round-arrow-up-svgrepo-com.svg" alt="" />
                  <p>+5</p>
                </button>
                <button
                  className="down"
                  onClick={() => sub5()}
                  disabled={!isPaused}
                >
                  <img src="round-arrow-down-svgrepo-com.svg" alt="" />
                  <p>-5</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default CustomClock;
