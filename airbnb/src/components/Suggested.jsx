import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/Suggested.scss";

class Suggested extends React.Component {
  state = {};
  render() {
    return (
      <div className="suggested-wrap">
        <div className="location">
          <div className="picture-wrap">
            <img
              src="https://a0.muscache.com/im/pictures/847cfb7f-788d-42dc-9148-f375348dde76.jpg?im_q=medq&im_w=240"
              className="picture"
            />
          </div>
          <div className="info">
            <div className="loc-name"><strong>Genova</strong></div>
            <div className="distance">15 mins drive</div>
          </div>
        </div>
        <div className="location">
          <div className="picture-wrap">
            <img
              src="https://a0.muscache.com/im/pictures/b948e0e0-c78f-4895-b433-c90401019981.jpg?im_q=medq&im_w=240"
              className="picture"
            />
          </div>
          <div className="info">
            <div className="loc-name"><strong>Inverness</strong></div>
            <div className="distance">2 hrs flight</div>
          </div>
        </div>
        <div className="location">
          <div className="picture-wrap">
            <img
              src="https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?im_q=medq&im_w=240"
              className="picture"
            />
          </div>
          <div className="info">
            <div className="loc-name"><strong>Edimburgh</strong></div>
            <div className="distance">1.5 hrs flight</div>
          </div>
        </div>
        <div className="location">
          <div className="picture-wrap">
            <img
              src="https://a0.muscache.com/im/pictures/e8d3d6de-40b1-4341-89f2-afb2a1a4f71f.jpg?im_q=medq&im_w=240"
              className="picture"
            />
          </div>
          <div className="info">
            <div className="loc-name"><strong>Rapallo</strong></div>
            <div className="distance">2 hrs drive</div>
          </div>
        </div>
        <div className="location">
          <div className="picture-wrap">
            <img
              src="https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?im_q=medq&im_w=240"
              className="picture"
            />
          </div>
          <div className="info">
            <div className="loc-name"><strong>Milan</strong></div>
            <div className="distance">1.5 hrs drive</div>
          </div>
        </div>
        <div className="location">
          <div className="picture-wrap">
            <img
              src="https://a0.muscache.com/im/pictures/b948e0e0-c78f-4895-b433-c90401019981.jpg?im_q=medq&im_w=240"
              className="picture"
            />
          </div>
          <div className="info">
            <div className="loc-name"><strong>Forte Diamante</strong></div>
            <div className="distance">2 hrs hike</div>
          </div>
        </div>
        <div className="location">
          <div className="picture-wrap">
            <img
              src="https://a0.muscache.com/im/pictures/e8d3d6de-40b1-4341-89f2-afb2a1a4f71f.jpg?im_q=medq&im_w=240"
              className="picture"
            />
          </div>
          <div className="info">
            <div className="loc-name"><strong>Nervi</strong></div>
            <div className="distance">1 hr drive</div>
          </div>
        </div>
        <div className="location">
          <div className="picture-wrap">
            <img
              src="https://a0.muscache.com/im/pictures/e8d3d6de-40b1-4341-89f2-afb2a1a4f71f.jpg?im_q=medq&im_w=240"
              className="picture"
            />
          </div>
          <div className="info">
            <div className="loc-name"><strong>Portofino</strong></div>
            <div className="distance">45 mins drive</div>
          </div>
        </div>

      </div>
    );
  }
}
export default Suggested;
