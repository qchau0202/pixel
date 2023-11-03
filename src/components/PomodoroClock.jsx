import React, { useState, useEffect, useRef } from "react";
import {
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import ProgressProvider from "./ProgressProvider";

const PomodoroClock = () => {
  const [isPaused, setIsPaused] = useState(true);
  const [progress, setProgress] = useState(100);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);

  const playButtonClickSound = () => {
    const audio = document.getElementById("playSound");
    audio.play();
  };

  const playAlarmSound = () => {
    const audio = document.getElementById("alarmSound");
    audio.play();
  };

  const resetAudio = () => {
    const audio = document.getElementById("playSound");
    audio.currentTime = 0;
  };

  const resetBtn = () => {
    setMinutes(25);
    setSeconds(0);
    setProgress(100);
    resetAudio();
    setIsPaused(true); // Reset the timer to paused state
  };

  useEffect(() => {
    let myInterval;

    if (!isPaused) {
      myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
          setProgress(
            Math.round(((minutes * 60 + seconds - 1) / (25 * 60)) * 100)
          );
        }

        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval);
            playAlarmSound(); // Play the alarm sound
            setIsPaused(true); // Pause the timer
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    }

    return () => {
      clearInterval(myInterval);
    };
  }, [isPaused, minutes, seconds]);

  const audioRef = useRef();

  return (
    <div>
      <div className="center">
        <div className="clock-holder center">
          <audio id="playSound" ref={audioRef}>
            <source src="/audio/mixkit-arcade-game-jump-coin-216.mp3" type="audio/mpeg" />
          </audio>
          <audio id="alarmSound">
            <source src="/audio/mixkit-alert-quick-chime-766.mp3" type="audio/mpeg" />
          </audio>

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
              <button
                onClick={() => {
                  setIsPaused(false);
                  resetAudio();
                  playButtonClickSound();
                }}
              >
                <img src="play-button-svgrepo-com.svg" alt="Play" />
              </button>
            ) : (
              <button onClick={() => setIsPaused(true)}>
                <img src="pause-svgrepo-com.svg" alt="Pause" />
              </button>
            )}
            <button onClick={resetBtn} className="reset">
              <img src="reset-svgrepo-com.svg" alt="Reset" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PomodoroClock;
