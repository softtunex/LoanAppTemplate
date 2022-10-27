import React from 'react'
import MainDash from '../../Component/MainDash/MainDash'
import SideBar from '../../Component/Sidebar/SideBar'
import "./Dashboard.scss"
// import { IProps } from '../LoginPage/LoginPage'
export interface UserInfo {
  displayUsers?: JSX.Element[];
  pageCount:number;
  changePage: ({ selected }: {
    selected: any;
}) => void  
}

const Dashboard:React.FC<UserInfo> = ({displayUsers,pageCount,changePage}) => {
  return (
    <div className='dashboard'>
        <SideBar/>
        <MainDash displayUsers={displayUsers} pageCount={pageCount} changePage={changePage}/>
    </div>
    
  )
}

export default Dashboard