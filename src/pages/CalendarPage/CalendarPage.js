import React from 'react'
import MiniCalendar from '../components/MiniCalendar'

const CalendarPage = ({theme, language}) => {
  return (
    <div><MiniCalendar theme={theme} language={language}/></div>
  )
}

export default CalendarPage