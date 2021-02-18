import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/Navigation.scss";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { BiGlobe } from "react-icons/bi";
import { VscThreeBars } from "react-icons/vsc";
import { IoPersonCircleSharp } from "react-icons/io5";

class Navigation extends React.Component {
  state = {
    logged: {}
  }
  componentDidMount = async () => {
    const response = await fetch(
      process.env.REACT_APP_BE_URL + "user/login/me", {
        method: 'GET',
        headers: {
          authorization: `Basic ${localStorage.getItem('base64')}`
        }
      }
    );
    if (response.ok) {
      let logged = await response.json();
      this.setState({ logged: logged });
    } else this.setState({ logged: {} });
  };
  render() {
    return (
      <div className="nav-wrap">
        <div className="logo-wrap">
          <Link to="/">
            <img src={Logo} alt="airbnb" className="logo" />{" "}
          </Link>
        </div>
        <div className="navigation-titles">
          <div className="title">Places to stay</div>
          <div className="title">Experiences</div>
          <div className="title">Online Experiences</div>
        </div>
        <div className="profile-become-host">
          <div className="become-a-host">Become a host</div>
          <BiGlobe className="languages" />
          <div className="profile-wrap">
            <VscThreeBars className="three-bars-icon" />
            <Link to={localStorage.getItem('base64') ? "/genova" : "/admin/manage/login"}>
              <img src={this.state.logged ? this.state.logged.img : 'http://placehold.it/150x150'} className="profile-icon" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Navigation;
