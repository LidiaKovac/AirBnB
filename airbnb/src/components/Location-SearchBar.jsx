import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/NavLocation.scss";
import Logo from "../assets/logo-pink.png";
import { BiGlobe } from "react-icons/bi";
import { VscThreeBars } from "react-icons/vsc";
import { IoPersonCircleSharp, IoSearch } from "react-icons/io5";

class NavLocation extends React.Component {
  render() {
    return (
      <div className="nav-wrap">
        <div className="logo-wrap">
          <img src={Logo} alt="airbnb" className="logo" />
        </div>
        <div className="search-form-component-location">
          <div className="location-form-location">
            <input
              className="input-form-location ml-3"
              type="text"
              placeholder="Place"
            />
          </div>
          <div className="check-in-form-location">
            <input className="input-form-location" type="date" />
          </div>

          <div className="guests-form-location">
            <input
              className="input-form-location"
              type="number"
              placeholder="Add guests"
            />
          </div>
          <div className="search-btn-location">
            <IoSearch className="search-icon-location" />
          </div>
        </div>
        <div className="profile-become-host-location">
          <div className="become-a-host-location">Become a host</div>
          <BiGlobe className="languages-location" />
          <div className="profile-wrap-location">
            <VscThreeBars className="three-bars-icon-location" />
            <IoPersonCircleSharp className="profile-icon-location" />
          </div>
        </div>
      </div>
    );
  }
}
export default NavLocation;
