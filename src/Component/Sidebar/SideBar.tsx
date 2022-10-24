import React from 'react'
import { Bussinesses, Settings, SwitchOrg } from '../../Data/Data'
import { CustomersSideBarData } from '../../Data/Data'

const SideBar = () => {
  return (
    <div>
      <div className="menu">
        {SwitchOrg.map((item,index)=>{
          return(
            <div>
              <span><item.icon/></span> {item.content}
            </div>
          )
        })}
        {CustomersSideBarData.map((item,index)=>{
          return(
            <div>
              <span><item.icon/></span> {item.content}
            </div>
          )
        })}
        {Bussinesses.map((item,index)=>{
          return(
            <div>
              <span><item.icon/></span> {item.content}
            </div>
          )
        })}
        {Settings.map((item,index)=>{
          return(
            <div>
              <span><item.icon/></span> {item.content}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SideBar