import React from 'react'
import { useContext } from 'react'
import { Mycontext } from '../App'
const Coursesenrol = () => {
 const {enrolarray,notenrolbtn} = useContext(Mycontext)
  return (<div className='courses-body'>   {
    enrolarray.map((item,index) => {
        return (
          <div className='card' key ={index}>
          <div className='card-details'>
            <h3 className='card-name'>Course :{item.name}</h3>
            <div className='card-mentor'>Mentor :{item.mentor}</div>
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
  )
}

export default Coursesenrol