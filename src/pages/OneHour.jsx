import React from 'react'
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

const OneHour = () => {
  return (
    <div className="center">
      <div className="clock-holder center">
        <div className="clock">
          <CircularProgressbarWithChildren value={66}>
            <div className="time">
              <p>60:00</p>
            </div>
          </CircularProgressbarWithChildren>
        </div>

        <div className="play-btn center">
          <button>
            <img src="play-button-svgrepo-com.svg" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default OneHour