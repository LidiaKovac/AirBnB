import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/Suggested.scss";
import {Link} from 'react-router-dom'

class Suggested extends React.Component {
  state = {};
  render() {
    return (
      <div className="suggested-wrap">
        <div className="location">
          <div className="picture-wrap">
            <img alt='img'
              src="https://a0.muscache.com/im/pictures/847cfb7f-788d-42dc-9148-f375348dde76.jpg?im_q=medq&im_w=240"
              className="picture"
            />
          </div>
          <div className="info">
          <Link to='/genova'>  <div className="loc-name"><strong>Genova</strong></div></Link>
            <div className="distance">15 mins drive</div>
          </div>
        </div>
        <div className="location">
          <div className="picture-wrap">
            <img alt='img'
              src="https://a0.muscache.com/im/pictures/b948e0e0-c78f-4895-b433-c90401019981.jpg?im_q=medq&im_w=240"
              className="picture"
            />
          </div>
          <div className="info">
          <Link to='/inverness'> <div className="loc-name"><strong>Inverness</strong></div> </Link> 
            <div className="distance">2 hrs flight</div>
          </div>
        </div>
        <div className="location">
          <div className="picture-wrap">
            <img alt='img'
              src="https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?im_q=medq&im_w=240"
              className="picture"
            />
          </div>
          <div className="info">
          <Link to='/edimburgh'>  <div className="loc-name"><strong>Edimburgh</strong></div> </Link>
            <div className="distance">1.5 hrs flight</div>
          </div>
        </div>
        <div className="location">
          <div className="picture-wrap">
            <img alt='img'
              src="https://a0.muscache.com/im/pictures/e8d3d6de-40b1-4341-89f2-afb2a1a4f71f.jpg?im_q=medq&im_w=240"
              className="picture"
            />
          </div>
          <div className="info">
         <Link to='/rapallo'><div className="loc-name"><strong>Rapallo</strong></div></Link>   
            <div className="distance">2 hrs drive</div>
          </div>
        </div>
        <div className="location">
          <div className="picture-wrap">
            <img alt='img'
              src="https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?im_q=medq&im_w=240"
              className="picture"
            />
          </div>
          <div className="info">
          <Link to='/milan'> <div className="loc-name"><strong>Milan</strong></div> </Link> 
            <div className="distance">1.5 hrs drive</div>
          </div>
        </div>
        <div className="location">
          <div className="picture-wrap">
            <img alt='img'
              src="https://a0.muscache.com/im/pictures/b948e0e0-c78f-4895-b433-c90401019981.jpg?im_q=medq&im_w=240"
              className="picture"
            />
          </div>
          <div className="info">
          <Link to='/montecarlo'>  <div className="loc-name"><strong>Montecarlo</strong></div></Link>
            <div className="distance">2hr drive</div>
          </div>
        </div>
        <div className="location">
          <div className="picture-wrap">
            <img alt='img'
              src="https://a0.muscache.com/im/pictures/e8d3d6de-40b1-4341-89f2-afb2a1a4f71f.jpg?im_q=medq&im_w=240"
              className="picture"
            />
          </div>
          <div className="info">
          <Link to='/kirkwall'> <div className="loc-name"><strong>Kirkwall</strong></div> </Link> 
            <div className="distance">1 hr drive</div>
          </div>
        </div>
        <div className="location">
          <div className="picture-wrap">
            <img alt='img'
              src="https://a0.muscache.com/im/pictures/e8d3d6de-40b1-4341-89f2-afb2a1a4f71f.jpg?im_q=medq&im_w=240"
              className="picture"
            />
          </div>
          <div className="info">
          <Link to='/kirkwall'> <div className="loc-name"><strong>Nordkapp</strong></div> </Link>
            <div className="distance">10 hrs flight</div>
          </div>
        </div>

      </div>
    );
  }
}
export default Suggested;
