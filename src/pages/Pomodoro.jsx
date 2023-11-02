import React from 'react'
import PomodoroClock from '../components/PomodoroClock'
import TodoList from '../components/TodoList'
import "../App.css";

const Pomodoro = () => {
  return (
    <div className='render-holder center' data-aos="fade-up" data-aos-duration="1000"><PomodoroClock/> <TodoList/></div>
  )
}

export default Pomodoro