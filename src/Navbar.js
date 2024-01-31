import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='Navbar-container'>
      <ul>
        <NavLink to='/'>Courses</NavLink>
        <NavLink to='/courses_enrolled'>Courses Enrolled</NavLink>
        <NavLink to='/courses_completed'> Completed Courses</NavLink>
        <NavLink to='/student_dashboard'>Dashboard</NavLink>
      </ul>
    </div>
  )
}

export default Navbar