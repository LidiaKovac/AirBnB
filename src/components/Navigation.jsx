import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/Navigation.scss";
import Logo from "../assets/logo.png";
import {Link} from 'react-router-dom'
import {BiGlobe} from 'react-icons/bi'
import {VscThreeBars} from 'react-icons/vsc'
import {IoPersonCircleSharp} from 'react-icons/io5'

class Navigation extends React.Component {
  render() {
    return (
      <div className="nav-wrap">
        <div className="logo-wrap">
        <Link to='/'><img src={Logo} alt="airbnb" className="logo" /> </Link>  
        </div>
        <div className="navigation-titles">
          <div className="title">Places to stay</div>
          <div className="title">Experiences</div>
          <div className="title">Online Experiences</div>
        </div>
        <div className="profile-become-host">
            <div className='become-a-host'>
                Become a host 
            </div>
            <BiGlobe className='languages'/>
            <div className='profile-wrap'>
                <VscThreeBars className='three-bars-icon'/>
              <Link to='/admin/manage/login'><IoPersonCircleSharp className='profile-icon'/></Link>  
            </div>
        </div>
      </div>
    );
  }
}
export default Navigation;
