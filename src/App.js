import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage"
import Pomodoro from "./pages/Pomodoro"
import OneHour from "./pages/OneHour"
import CustomTimer from "./pages/CustomTimer"
function App() {
  return (
    <>
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<WelcomePage/>} />
            <Route path="/pomodoro" element={<Pomodoro/>} />
            <Route path="/onehour" element={<OneHour/>} />
            <Route path = "/custom" element={<CustomTimer/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
