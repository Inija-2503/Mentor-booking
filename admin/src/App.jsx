import React, { useContext } from 'react'
import { MentorContext } from './context/MentorContext';
import { AdminContext } from './context/AdminContext';
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddMentor from './pages/Admin/AddMentor';
import MentorsList from './pages/Admin/MentorsList';
import Login from './pages/Login';
import MentorAppointments from './pages/Mentor/MentorAppointments';
import MentorDashboard from './pages/Mentor/MentorDashboard';
import MentorProfile from './pages/Mentor/MentorProfile';

const App = () => {

  const { dToken } = useContext(MentorContext)
  const { aToken } = useContext(AdminContext)

  return dToken || aToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-appointments' element={<AllAppointments />} />
          <Route path='/add-mentor' element={<AddMentor />} />
          <Route path='/mentor-list' element={<MentorsList />} />
          <Route path='/mentor-dashboard' element={<MentorDashboard />} />
          <Route path='/mentor-appointments' element={<MentorAppointments />} />
          <Route path='/mentor-profile' element={<MentorProfile />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <ToastContainer />
      <Login />
    </>
  )
}

export default App