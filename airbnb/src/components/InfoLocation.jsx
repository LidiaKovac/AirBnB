import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/InfoLocation.scss";
import NavLocation from "./Location-SearchBar";
import { ProgressBar } from "react-bootstrap";
import {
  IoShareOutline,
  IoCalendarOutline,
  IoBookOutline,
} from "react-icons/io5";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { CgHome } from "react-icons/cg";

import { HiOutlineSparkles, HiOutlineLocationMarker } from "react-icons/hi";

class InfoLocation extends React.Component {
  render() {
    return (
      <div className="page-wrap">
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
                      <CgHome className="icon" />
                    </div>
                    <div className="service-info">
                      <div className="title">[type of service]</div>
                      <div className="description">[brief description]</div>
                    </div>
                  </div>
                  <div className="single-service">
                    <div className="service-icon">
                      <HiOutlineSparkles className="icon" />
                    </div>
                    <div className="service-info">
                      <div className="title">[type of service]</div>
                      <div className="description">[brief description]</div>
                    </div>
                  </div>
                  <div className="single-service">
                    <div className="service-icon">
                      <HiOutlineLocationMarker className="icon" />
                    </div>
                    <div className="service-info">
                      <div className="title">[type of service]</div>
                      <div className="description">[brief description]</div>
                    </div>
                  </div>
                  <div className="single-service">
                    <div className="service-icon">
                      <IoCalendarOutline className="icon" />
                    </div>
                    <div className="service-info">
                      <div className="title">[type of service]</div>
                      <div className="description">[brief description]</div>
                    </div>
                  </div>
                  <div className="single-service">
                    <div className="service-icon">
                      <IoBookOutline className="icon" />
                    </div>
                    <div className="service-info">
                      <div className="title">[type of service]</div>
                      <div className="description">[brief description]</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="check-if-available">
                <div className="row-availability">
                  <div className="text">Add dates to see the prices</div>
                  <div className="rating-check-available">
                    <AiFillStar style={{ color: "#FF385C" }} />
                    [x.x], [xx]
                  </div>
                </div>
                <div className="form-row-check-in-out">
                  <input type="date" className="date-picker" id="checkin" />
                  <input type="date" className="date-picker" id="checkout" />
                </div>
                <div className="guests-input">
                  <input
                    type="number"
                    className="guests-counter"
                    placeholder="Guests"
                  />
                </div>
                <div className="check-btn">
                  <div>Check for availability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="reviews-wrap">
          <div className="reviews-header">
            <AiFillStar style={{ color: "#FF385C" }} />
            [x.x], [xx reviews]
          </div>
          <div className="reviews-average">
            <div className="rating-average">
              <div className="type-of-rating">[thing to rate]</div>
              <div className="pb">
                <ProgressBar now={60} className="average-rating-pb" />
                <div className="rating-label">x.x</div>
              </div>
            </div>
            <div className="rating-average">
              <div className="type-of-rating">[thing to rate]</div>
              <div className="pb">
                <ProgressBar now={60} className="average-rating-pb" />
                <div className="rating-label">x.x</div>
              </div>
            </div>
            <div className="rating-average">
              <div className="type-of-rating">[thing to rate]</div>
              <div className="pb">
                <ProgressBar now={60} className="average-rating-pb" />
                <div className="rating-label">x.x</div>
              </div>
            </div>
            <div className="rating-average">
              <div className="type-of-rating">[thing to rate]</div>
              <div className="pb">
                <ProgressBar now={60} className="average-rating-pb" />
                <div className="rating-label">x.x</div>
              </div>
            </div>
            <div className="rating-average">
              <div className="type-of-rating">[thing to rate]</div>
              <div className="pb">
                <ProgressBar now={60} className="average-rating-pb" />
                <div className="rating-label">x.x</div>
              </div>
            </div>
            <div className="rating-average">
              <div className="type-of-rating">[thing to rate]</div>
              <div className="pb">
                <ProgressBar now={60} className="average-rating-pb" />
                <div className="rating-label">x.x</div>
              </div>
            </div>
          </div>
        </div>
        <div className="reviews-showdown">
          <div className="review-single">
            <div className="review-single-header">
              <img src="https://placehold.it/200x200" className="reviews-pp" />
              <div className="review-single-info">
                <div className="name">Name</div>
                <div className="review-date">Month 1900</div>
              </div>
              
            </div>
            <div className="review-text">
                [reviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreviewreview]
              </div>
          </div>
        </div>
        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11398.911230536274!2d8.9134973!3d44.418230900000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sit!2sit!4v1609683626935!5m2!1sit!2sit"  frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
    );
  }
}
export default InfoLocation;
