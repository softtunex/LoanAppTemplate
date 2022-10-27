import React from 'react'
import "./NavBar.scss"
import Logo from "../../img/logo.png"
import Profile from "../../img/avatar.png"

const NavBar = () => {
  return (
    <div className='navBar'>
        <div className="navBar_logo">
            <img src={Logo} alt="" />
            <span><h1>Demo Loan</h1></span>
        </div>
        <div className="navBar_searchbar">
        <form className="navBar_searchbar_form">
          <input type="text" placeholder="Search for anything" name="search"/>
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>

        </div>
        <div className="navBar_profile">
          <p>Doc</p>
          <div className='profile'>
          <span><i className="fa fa-bell"></i></span>
          <img src={Profile} alt="" />
          <span>Adedeji</span>
          </div>
        </div>
    </div>
  )
}

export default NavBar