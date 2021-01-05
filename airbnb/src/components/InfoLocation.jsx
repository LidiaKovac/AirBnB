import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Col } from "react-bootstrap";
import "../styling/InfoLocation.scss";
import moment from "moment";
import NavLocation from "./Location-SearchBar";
import ProPic from "../assets/propic.png";
import {
  IoShareOutline,
  IoCalendarOutline,
  IoBookOutline,
} from "react-icons/io5";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { CgHome } from "react-icons/cg";

import { HiOutlineSparkles, HiOutlineLocationMarker } from "react-icons/hi";
import { withRouter } from "react-router-dom";

class InfoLocation extends React.Component {
  state = {
    house: {},
    address: {},
    images: "",
    query: "",
    reviews: [],
    average: 0,
    newReview: {
      user: "",
      rating: 0,
      review: "",
      houseID: this.props.match.params.id,
    },
  };
  bookHouse = async () => {
    console.log("Booking: ", this.state.house);
    let body = {
      ...this.state.house,
      isBooked: true,
    };
    try {
      await fetch(
        "http://localhost:3001/houses/" +
          this.props.match.params.location +
          "/" +
          this.props.match.params.id,
        {
          method: "PUT",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  };
  getRating = async () => {
    let reviewsDB = await fetch(
      "http://localhost:3001/reviews/" + this.props.match.params.id
    );
    if (reviewsDB.ok) {
      let reviews = await reviewsDB.json();
      console.log(reviews);
      this.setState({ reviews: reviews });
      let average =
        reviews.map((rev) => rev.rating).reduce((a, b) => a + b, 0) /
        reviews.length;
      this.setState({ average: average });
    } else {
      alert("Something went wrong");
    }
  };
  cancelBooking = async () => {
    console.log("Booking: ", this.state.house);
    let body = {
      ...this.state.house,
      isBooked: false,
    };
    try {
      const response = await fetch(
        "http://localhost:3001/houses/" +
          this.props.match.params.location +
          "/" +
          this.props.match.params.id,
        {
          method: "PUT",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  };
  getDetails = async () => {
    let housesRes = await fetch(
      "http://localhost:3001/houses/" +
        this.props.match.params.location +
        "/" +
        this.props.match.params.id
    );
    let house = await housesRes.json();
    this.setState({ house: house[0] });
    this.setState({ address: house[0].address });
    let street = this.state.address.street;
    let city = this.state.address.city;
    let completeAdd = street + " " + city;
    let query = completeAdd.toString().split(" ").join("+");
    this.setState({ query: query });
  };

  getPictures = async () => {
    let images = await fetch(
      "http://localhost:3001/files/" + this.props.match.params.id
    );

    let imageDB = await images.json();
    let url = [];
    imageDB.forEach((img) => {
      url.push(img.img);
    });

    this.setState({ images: url });
  };
  handleChange = (e) => {
    this.setState(
      {
        newReview: {
          ...this.state.newReview,
          [e.target.id]: e.currentTarget.value,
        },
      },
      () => console.log(this.state.newReview)
    );
  };

  postReview = async () => {
    const response = await fetch(
      "http://localhost:3001/reviews/"+ this.props.match.params.id, 
      {
        method: "POST",
        body: JSON.stringify(this.state.newReview),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response)
    await this.getDetails();
    this.getRating();
    this.getPictures();
  };

  componentDidMount = async () => {
    await this.getDetails();
    this.getRating();
    this.getPictures();
  };

  render() {
    return (
      <div className="page-wrap">
        <NavLocation />
        <div className="info-wrap">
          <div className="wrap">
            <div className="name">{this.state.house.title}</div>
            <div className="rating-line">
              <div>
                <strong>{this.state.average}</strong>,{" "}
                {this.state.reviews.length} ratings ∙{" "}
                {this.state.address.city && this.state.address.city}
              </div>
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
                <img alt="img" src={this.state.images[0]} />
              </div>
              <div className="small-pictures">
                <img alt="img" src={this.state.images[1]} />
                <img alt="img" src={this.state.images[2]} />
                <img alt="img" src={this.state.images[3]} />
                <img alt="img" src={this.state.images[4]} />
              </div>
            </div>
            <div className="info-row">
              <div className="info-col">
                <div className="type-and-host">
                  {this.state.house.house} - Host: {this.state.house.host}
                </div>
                <div className="guests-and-rooms">
                  {this.state.house.rooms} rooms ∙ {this.state.house.facilities}
                </div>
                <div className="host-details">Show host details</div>
                <div className="services">
                  <div className="single-service">
                    <div className="service-icon">
                      <CgHome className="icon" />
                    </div>
                    <div className="service-info">
                      <div className="title">{this.state.house.house}</div>
                      <div className="description">
                        You will have the whole premise for you.
                      </div>
                    </div>
                  </div>
                  <div className="single-service">
                    <div className="service-icon">
                      <HiOutlineSparkles className="icon" />
                    </div>
                    <div className="service-info">
                      <div className="title">Advanced cleaning methods</div>
                      <div className="description">
                        The host is committing to our 5-step cleaning process.
                      </div>
                    </div>
                  </div>
                  <div className="single-service">
                    <div className="service-icon">
                      <HiOutlineLocationMarker className="icon" />
                    </div>
                    <div className="service-info">
                      <div className="title">{this.state.address.city}</div>
                      <div className="description">
                        {this.state.address.street}
                      </div>
                    </div>
                  </div>
                  <div className="single-service">
                    <div className="service-icon">
                      <IoCalendarOutline className="icon" />
                    </div>
                    <div className="service-info">
                      <div className="title">Cencellation terms and fees</div>
                      <div className="description">
                        Add your travel dates to know details about cancellation
                        fees and terms.
                      </div>
                    </div>
                  </div>
                  <div className="single-service">
                    <div className="service-icon">
                      <IoBookOutline className="icon" />
                    </div>
                    <div className="service-info">
                      <div className="title">Rules of the house</div>
                      <div className="description">
                        It's forbidden to host parties, bring animals and smoke.{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="check-if-available">
                <div className="row-availability">
                  <div className="text">Add dates to see the prices</div>
                  <div className="rating-check-available">
                    <AiFillStar
                      style={{ color: "#FF385C", marginRight: "10px" }}
                    />
                    {this.state.average}.0, {this.state.reviews.length} reviews
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
                <div
                  className="check-btn"
                  onClick={
                    !this.state.house.isBooked
                      ? () => {
                          this.bookHouse();
                        }
                      : () => {
                          this.cancelBooking();
                        }
                  }
                >
                  <div>
                    {this.state.house.isBooked ? "Cancel Booking" : "Book"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="reviews-wrap">
          <Form>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  id="user"
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group>

              <Form.Group as={Col} >
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="Choose a rating"
                  className="w-50"
                  id="rating"
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value={1}>★</option>
                  <option value={2}>★★</option>
                  <option value={3}>★★★</option>
                  <option value={4}>★★★★</option>
                  <option value={5}>★★★★★</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Group>
              <Form.Label>Review</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Type in your review"
                className="w-75"
                rows={8}
                style={{ resize: "none" }}
                id="review"
                onChange={(e) => this.handleChange(e)}
              />
            </Form.Group>

            <Button
              type="button"
              style={{ backgroundColor: "#FF385C", border: "none" }}
              onClick={() => this.postReview()}
            >
              Submit
            </Button>
          </Form>
        </div>
        <div className="reviews-showdown">
          {this.state.reviews &&
            this.state.reviews.map((rev) => (
              <div className="review-single">
                <div className="review-single-header">
                  <img alt="img" src={ProPic} className="reviews-pp" />
                  <div className="review-single-info">
                    <div className="name">{rev.user}</div>
                    <div className="review-date">
                      {moment(rev.createdAt).format("MMM YYYY")}
                    </div>
                  </div>
                </div>
                <div className="review-text">{rev.review}</div>
              </div>
            ))}
        </div>
        <iframe
          className="map"
          src={
            "https://www.google.com/maps/embed/v1/place?key=" +
            process.env.REACT_APP_MAPS_API_KEY +
            "&q=" +
            this.state.query
          }
          allowfullscreen
        ></iframe>
      </div>
    );
  }
}
export default withRouter(InfoLocation);
