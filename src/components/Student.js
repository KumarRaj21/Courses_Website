import React,{useContext} from 'react'
import { Mycontext } from '../App'

const Student = () => {
  const {enrolarray,notenrolbtn,completebtn} =useContext(Mycontext)
  return (
    <div className='student-container'>
      <div className='student-header'>
        <h1>Here is the Courses You Enrolled</h1>
        <div className='courses-body'>   {
    enrolarray.map((item,index) => {
        return (
          <div className='card' key ={index}>
          <div className='card-details'>
            <input type="checkbox" onClick={()=> completebtn(index)} />
            <h3 className='card-name'> Course : {item.name}</h3>
            <div className='card-mentor'> Mentor : {item.mentor}</div>
            <div className='card-des'>{item.des}</div>
            <button className='card-enrol' onClick={()=>notenrolbtn(index)}>Delete</button>
          </div>
          <div className='card-img'>
            <img src={item.url} alt='' />
          </div>
        </div>
        )
      })
    }</div>
      </div>
    </div>
  )
}

export default Student