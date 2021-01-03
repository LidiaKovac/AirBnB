import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/InfoLocation.scss";
import NavLocation from "./Location-SearchBar";
import { IoShareOutline, IoCalendarOutline, IoBookOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { CgHome } from "react-icons/cg";
import {HiOutlineSparkles, HiOutlineLocationMarker} from 'react-icons/hi'

class InfoLocation extends React.Component {
  render() {
    return (
      <>
        <div className="info-wrap">
          <NavLocation style={{ width: "50%!important" }} />
          <div className="wrap">
            <div className="name">[name of premises]</div>
            <div className="rating-line">
              <div>[rating], [num of reviews] ∙ [location]</div>
              <div className="save-share">
                <div className="pr-3">
                  <IoShareOutline /> Share
                </div>
                <div className="pr-3">
                  <AiOutlineHeart /> Save
                </div>
              </div>
            </div>
            <div className="showcase">
              <div className="big-picture">
                <img src="https://placehold.it/700x700" />
              </div>
              <div className="small-pictures">
                <img src="https://placehold.it/500x500" />
                <img src="https://placehold.it/500x500" />
                <img src="https://placehold.it/500x500" />
                <img src="https://placehold.it/500x500" />
              </div>
            </div>
            <div className="info-row">
              <div className="info-col">
                <div className="type-and-host">
                  [type of airbnb] - Host: [host]
                </div>
                <div className="guests-and-rooms">
                  [guests] ∙ [bedrooms] ∙ [beds] ∙ [bathrooms]
                </div>
                <div className="host-details">Show host details</div>
                <div className="services">
                  <div className="single-service">
                    <div className="service-icon">
                      <CgHome className='icon'/>
                    </div>
                    <div className="service-info">
                      <div className="title">[type of service]</div>
                      <div className="description">[brief description]</div>
                    </div>
                  </div>
                  <div className="single-service">
                    <div className="service-icon">
                      <HiOutlineSparkles className='icon'/>
                    </div>
                    <div className="service-info">
                      <div className="title">[type of service]</div>
                      <div className="description">[brief description]</div>
                    </div>
                  </div>
                  <div className="single-service">
                    <div className="service-icon">
                      <HiOutlineLocationMarker className='icon'/>
                    </div>
                    <div className="service-info">
                      <div className="title">[type of service]</div>
                      <div className="description">[brief description]</div>
                    </div>
                  </div>
                  <div className="single-service">
                    <div className="service-icon">
                      <IoCalendarOutline className='icon'/>
                    </div>
                    <div className="service-info">
                      <div className="title">[type of service]</div>
                      <div className="description">[brief description]</div>
                    </div>
                  </div>
                  <div className="single-service">
                    <div className="service-icon">
                      <IoBookOutline className='icon'/>
                    </div>
                    <div className="service-info">
                      <div className="title">[type of service]</div>
                      <div className="description">[brief description]</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="check-if-available"></div>
          </div>
        </div>
      </>
    );
  }
}
export default InfoLocation;
