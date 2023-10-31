import {Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'
const NavBar = () => {
  const navigate = useNavigate();
  const items = [
    {
      key: "pomodoro",
      label: "Pomodoro",
    },
    {
      key: "onehour",
      label: "1 Hour",
    },
    {
      key: "custom",
      label: "Custom",
    },
  ];
  return (
    <header className="center">
      <div className="top center">
      <div className="logo center cursor-pointer hover:none">
        <img
          onClick={(e) => navigate(`/`)}
          src="/PixelLogo-removebg-preview.png"
          className="w-20 h-20"
          />
          <p>Pixel</p>
      </div>

      <Menu
          items={items}
        onClick={(e) => navigate(`/${e.key}`)}
        className="navBar narrow"
      ></Menu>

    </div>
    </header>
  );
};

export default NavBar;
