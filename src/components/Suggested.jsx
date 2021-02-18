import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/Suggested.scss";
import {Link} from 'react-router-dom'

class Suggested extends React.Component {
  state = {};
  render() {
    return (
      <div className="suggested-wrap p-5">
        {this.props.cities && this.props.cities.map((city)=> 
          <div className="location">
          <div className="picture-wrap">
            <img alt='img'
              src="https://a0.muscache.com/im/pictures/847cfb7f-788d-42dc-9148-f375348dde76.jpg?im_q=medq&im_w=240"
              className="picture"
            />
          </div>
          <div className="info">
          <Link to={`/${city}`}>  <div className="loc-name"><strong>{city}</strong></div></Link>
            <div className="distance">15 mins drive</div>
          </div>
        </div>
        )}
      </div>
    );
  }
}
export default Suggested;
