import React,{useContext} from 'react'
import { Mycontext } from '../App'
const Completedcourses = () => {
  const {enrolarray,notenrolbtn} =useContext(Mycontext)
  return (<div className='courses-body'>
     {
     enrolarray.map((item,index)=>{
        return item.complete? (<div className='card' key ={index}>
          <div className='card-details'>
            <div className='card-name'>{item.name}</div>
            <div className='card-mentor'>{item.mentor}</div>
            <div className='card-des'>{item.des}</div>
            <button className='view-details'>View details</button>
            <button className='card-enrol' onClick={()=>notenrolbtn(index)}>Delete</button>
          </div>
          <div className='card-img'>
            <img src={item.url} alt='' />
          </div>
        </div>):null
      })
     }
  </div>
   
  )
}

export default Completedcourses