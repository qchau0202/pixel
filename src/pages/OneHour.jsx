import React from 'react'
import OneHourClock from '../components/OneHourClock'
import TodoList from '../components/TodoList'

const OneHour = () => {
  return (
   <div className='render-holder center' data-aos="fade-up" data-aos-duration="1000"><OneHourClock/> <TodoList/></div>
  )
}

export default OneHour