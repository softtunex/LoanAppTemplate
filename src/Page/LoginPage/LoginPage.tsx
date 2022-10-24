import React, { useState } from 'react'
import { IBoard as Props } from '../../App';
import Login from "../../img/pablo-sign-in 1.svg"
import "./LoginPage.scss"

interface IProps{
  dashboard:Props["dashboard"];
  setDashboard:React.Dispatch<React.SetStateAction<boolean>>
}
const LoginPage = ({dashboard,setDashboard}:IProps) => {
  const [show,setShow]=useState(false)
const handleClick=()=>{
  setShow(prevShow=>{
    return !prevShow
  })
}
const handleBtnClick=()=>{
  setDashboard(!dashboard)
}

  return (
    <div className='loginPage'>
        <div className='loginPage_Image'>
              <img src={Login} alt="" />
        </div>
        <div className='loginPage_Content'>
          <div className='loginPage_Content_Header'>
          <h1>Welcome!</h1>
          <p>Enter details to login</p>
          </div>
          <div className='loginPage_Content_Input'>
            <input 
            type="text"
            name="email"
            placeholder='Email'
            />
            <div className='passwordDiv'>

            <input
            className='passwordDiv_password'
            name="password"
            type={show?"text":"password"}
            placeholder='Password'
            />
            <span onClick={handleClick} className="passwordDiv_showPass" id="togglePassword">SHOW</span>
            </div>
          </div>
          <a className='loginPage_Content_link' href="a.com">Forgot Password?</a>
          <button onClick={handleBtnClick} className='loginPage_Content_btn'>LOG IN</button>

        </div>
    </div>
  )
}

export default LoginPage