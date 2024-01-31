import React, { useContext } from 'react'
import { Mycontext } from '../App'
import { NavLink } from 'react-router-dom'
const Courses = () => {
  const {search,setsearch,courseslist,enrolbtn} = useContext(Mycontext)
  return (
    <div className='courses-container'>
      <div className='courses-header'>
        <h1>Serach by Course or by Mentor name</h1>
        <input type='text' placeholder='e.g.full stack, python'
          onChange={(e) => {
            setsearch(e.target.value)
          }} />
      </div>
      <div className='courses-body'>
        {
          courseslist.filter((item) => {
            return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search) || item.mentor.toLowerCase().includes(search)
          }).map((item,index) => {
            return (<div className='card' key ={index}>
            <div className='card-details'>
              <h3 className='card-name'>Course : {item.name}</h3>
              <div className='card-mentor'>Mentor : {item.mentor}</div>
              <div className='card-des'>{item.des}</div>
                   <button className='card-enrol' onClick={()=>enrolbtn(item)}>Enroll the course</button>
            </div>
            <div className='card-img'>
              <img src={item.url} alt='' />
            </div>
          </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Courses