import React from "react";
import "../App.css";
const WelcomePage = () => {
  return (
    <>
      <div className="content center">
        <h1 className="center">Welcome to Pixel!</h1>
        <p className="center"> A timer-based study app</p>
      </div>
      <br/>
      <div className="des center">
  <div className="des-content" data-aos="fade-right" data-aos-duration="1000">
    <h1>What is Pixel?</h1>
  </div>
  <p data-aos="fade-up" data-aos-duration="1000">
    Pixel is a versatile study app and countdown timer with the following features
  </p>
  <ul>
    <li data-aos="fade-up" data-aos-duration="2000">
      <strong>Pomodoro</strong>
    </li>
    <li data-aos="fade-up" data-aos-duration="2000">
      <strong>1 Hour session</strong>
    </li>
    <li data-aos="fade-up" data-aos-duration="2000">
      <strong>Custom timer</strong>
    </li>
  </ul>
</div>


    </>
  );
};

export default WelcomePage;
