import React from 'react'
import { CardInfo } from '../../Data/Data'
import BasicTable from '../Table/Table'
import { UserInfo as User } from '../../Page/Dashboard/Dashboard'
import "./Maindash.scss"
export interface IUser {
  displayUsers?: User["displayUsers"];
  pageCount:User["pageCount"];
  changePage:User["changePage"]
  
}
const MainDash =({displayUsers,pageCount,changePage}:IUser) => {
  return (
    
    <div className='Mdashboard'>
      <h2>USERS</h2>
      <div className="Mdashboard_Card">

      {CardInfo.map((item,i)=>{
        return(

      <div key={i} className='Mdashboard_CardItems'>
        <div className='Mdashboard_CardItems_Icon' style={{color:item.iconColor, backgroundColor:item.iconBgc}}><item.icon/></div>
        <div className='Mdashboard_CardItems_User'>{item.title}</div>
        <div className='Mdashboard_CardItems_Total'><h2>{item.total}</h2></div>

      </div>
        )
      })}
      </div>
      <div className='Mdashboard_Table'>

      <BasicTable displayUsers={displayUsers} pageCount={pageCount} changePage={changePage}/>
      </div>
    </div>
  )
}

export default MainDash