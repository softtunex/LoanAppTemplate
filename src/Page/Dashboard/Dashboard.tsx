import React from 'react'
import MainDash from '../../Component/MainDash/MainDash'
import SideBar from '../../Component/Sidebar/SideBar'
import "./Dashboard.scss"
// import { IProps } from '../LoginPage/LoginPage'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <SideBar/>
        <MainDash/>
    </div>
    
  )
}

export default Dashboard