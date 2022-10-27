import React from 'react'
import { CustomersSideBarData } from '../../Data/Data'
import "./SideBar.scss"

const SideBar = () => {
  return (
    <div>
      <div className="menu">
        
        {CustomersSideBarData.map((item,index)=>{
          return(
            <div key={index} className='menu_Data'>
              <div className='menu_Head'>
              <p>{item.head}</p>

              </div>
              <div className='menu_Body'>

              <span><item.icon/></span> <div className='menu_Body_Content'>{item.content}</div>
              </div>
            </div>
          )
        })}
        
      </div>
    </div>
  )
}

export default SideBar