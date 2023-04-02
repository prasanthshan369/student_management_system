import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Nav/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import Course from './pages/Course/Course'
import Dashboard from './pages/Dashboard/Dashboard'
import Staff from './pages/Staff/Staff'
import Student from './pages/Student/Student'
import "./App.css"
import PrivateRoute from './Components/PrivateRoute'
const App = () => {
  return (
     <div className='main_container'>
       <Router>
        <Sidebar>
      <Routes>
       <Route path='/' element={<Dashboard/> }/>
       <Route element={<PrivateRoute/>}>
        <Route path='/course' element={<Course/>}/>
        <Route path='/staff' element={<Staff/>}/>
        <Route path='/student' element={<Student/>}/>
        </Route>
      </Routes>
      </Sidebar>
    </Router>
     </div>
  )
}

export default App