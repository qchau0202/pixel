import React from "react";
import CustomClock from "../components/CustomClock";
import TodoList from "../components/TodoList";
const CustomTimer = () => {
  return (
  <div className='render-holder center' data-aos="fade-up" data-aos-duration="1000"><CustomClock/> <TodoList/></div>
  )
}

export default CustomTimer