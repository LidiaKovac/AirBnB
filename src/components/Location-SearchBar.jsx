import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/NavLocation.scss";
import Logo from "../assets/logo-pink.png";
import {Link} from 'react-router-dom'
import { BiGlobe } from "react-icons/bi";
import { VscThreeBars } from "react-icons/vsc";
import { IoPersonCircleSharp, IoSearch } from "react-icons/io5";

class NavLocation extends React.Component {
  state={
    query: ''
  }
  render() {
    return (
      <div className="nav-wrap" style={{backgroundColor: 'white', height: '90px'}}>
        <div className="logo-wrap">
        <Link to='/'><img src={Logo} alt="airbnb" className="logo" /> </Link>  
        </div>
        <div className="search-form-component-location">
          <div className="location-form-location">
            <input
              className="input-form-location ml-3"
              type="text"
              placeholder="Start searching..."
              value={this.state.query}
              onChange={(e)=> this.setState({query: e.currentTarget.value})}
            />
          </div>
          <div className="search-btn-location">
            <IoSearch className="search-icon-location" onClick={()=>this.props.getQ(this.state.query)} />
          </div>
        </div>
        <div className="profile-become-host-location">
          <div className="become-a-host-location">Become a host</div>
          <BiGlobe className="languages-location" />
          <div className="profile-wrap-location">
            <VscThreeBars className="three-bars-icon-location" />
            <Link to={localStorage.getItem('base64') ? "/genova" : "/admin/manage/login"}><IoPersonCircleSharp className='profile-icon-location'/></Link>
          </div>
        </div>
      </div>
    );
  }
}
export default NavLocation;
