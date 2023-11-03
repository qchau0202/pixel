import React, { useState, useEffect, useRef } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import ProgressProvider from "./ProgressProvider";

const CustomClock = () => {
  const [isPaused, setIsPaused] = useState(true);
  const [progress, setProgress] = useState(100);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const playButtonClickSound = () => {
    const audio = document.getElementById("playSound");
    audio.play();
  };

  const playAlarmSound = () => {
    const audio = document.getElementById("alarmSound");
    audio.play();
  };

  const audioRef = useRef();

  const resetAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handlePlayButtonClick = () => {
    if (minutes > 0 || seconds > 0) {
      setIsPaused(false);
      resetAudio();
      playButtonClickSound();
    }
  };

  const resetBtn = () => {
    setMinutes(0);
    setSeconds(0);
    setProgress(100);
    resetAudio();
  };

  const add10 = () => {
    setMinutes(minutes + 10);
    resetAudio();
  };

  const sub10 = () => {
    if (minutes >= 10) {
      setMinutes(minutes - 10);
      resetAudio();
    }
  };

  const add5 = () => {
    setMinutes(minutes + 5);
    resetAudio();
  };

  const sub5 = () => {
    if (minutes >= 5) {
      setMinutes(minutes - 5);
      resetAudio();
    }
  };

  useEffect(() => {
    let myInterval;

    if (!isPaused) {
      myInterval = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          clearInterval(myInterval);
          setIsPaused(true);
          setMinutes(0);
          setSeconds(0);
          setProgress(100);
          playAlarmSound();
        } else if (seconds === 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }

        setProgress(
          Math.round(((minutes * 60 + seconds) / (initialMinute * 60)) * 100)
        );
      }, 1000);
    }

    return () => {
      clearInterval(myInterval);
    };
  }, [isPaused, minutes, seconds]);

  const initialMinute = 0;

  return (
    <div className="clock-holder center custom-holder">
      <audio id="playSound" ref={audioRef}>
        <source src="/audio/mixkit-arcade-game-jump-coin-216.mp3" type="audio/mpeg" />
      </audio>
      <audio id="alarmSound" ref={audioRef}>
        <source src="/audio/mixkit-alert-quick-chime-766.mp3" type="audio/mpeg" />
      </audio>

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
          <button onClick={handlePlayButtonClick}>
            <img src="play-button-svgrepo-com.svg" alt="Play" />
          </button>
        ) : (
          <button onClick={() => setIsPaused(true)}>
            <img src="pause-svgrepo-com.svg" alt="Pause" />
          </button>
        )}
        <button onClick={resetBtn} disabled={!isPaused} className="reset">
          <img src="reset-svgrepo-com.svg" alt="Reset" />
        </button>
      </div>

      <div className="button-holder center">
        <div className="tenMin">
          <button className="up" onClick={add10} disabled={!isPaused}>
            <img src="round-arrow-up-svgrepo-com.svg" alt="+10" />
            <p>+10</p>
          </button>
          <button className="down" onClick={sub10} disabled={!isPaused}>
            <img src="round-arrow-down-svgrepo-com.svg" alt="-10" />
            <p>-10</p>
          </button>
        </div>
        <div className="fiveMin">
          <button className="up" onClick={add5} disabled={!isPaused}>
            <img src="round-arrow-up-svgrepo-com.svg" alt="+5" />
            <p>+5</p>
          </button>
          <button className="down" onClick={sub5} disabled={!isPaused}>
            <img src="round-arrow-down-svgrepo-com.svg" alt="-5" />
            <p>-5</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomClock;
