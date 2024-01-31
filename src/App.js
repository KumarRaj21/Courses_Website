import './App.css';
import Navbar from './Navbar';
import { Routes,Route } from 'react-router-dom';
import Completedcourses from './components/Completedcourses';
import Courses from './components/Courses';
import Coursesenrol from './components/Coursesenrol';
import Student from './components/Student'
import { course_data } from './data/array'
import { createContext, useState } from 'react';
export const Mycontext =createContext();
function App() {
  const [courseslist,setcourseslist] =useState(course_data)
  const [enrolarray,setenrolarray]=useState([])
  const [search, setsearch] = useState('');
  const enrolbtn =(item)=>{
  setenrolarray((old)=>[...old,item])
  }
  const notenrolbtn =(i)=>{
    setenrolarray((old)=>{
     return old.filter((item,index)=>{
      return i!==index
     })
    })
  }
  const completecourse=(changingindex)=>{
    setenrolarray(enrolarray.map((item,index)=>{
      return index!== changingindex? {item}:{name:item.name,des:item.des,mentor:item.mentor, url:item.url, complete: !item.complete}
      }))
      }


  return (
  <Mycontext.Provider value={{search,setsearch,courseslist,enrolarray,enrolbtn,notenrolbtn,completecourse}}>
    <div className='App-container'>
     <div className='App-header'>
    <Navbar/>
   </div>
   <div className='App-body'>
   <Routes>
    <Route path='/' element={<Courses />}/>
    <Route path='/courses_enrolled' element={<Coursesenrol/>} />
    <Route path='/courses_completed' element={<Completedcourses/>} />
    <Route path='/student_dashboard' element={<Student/>}/>
   </Routes>
   </div>
  </div>
  </Mycontext.Provider>
  
  
  );
}
export default App;
