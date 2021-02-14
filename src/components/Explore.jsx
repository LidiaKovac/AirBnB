import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import "../styling/Explore.scss";
import uniqid from 'uniqid'
import NavLocation from "./Location-SearchBar";
import { Link, withRouter } from "react-router-dom";

class Explore extends React.Component {
  state = {
    houses: [],
    images: [],
    ratings: [],
    lenght: []
  };
  showAvailable = async () => {
    let housesRes = await fetch(
      process.env.REACT_APP_BE_URL + this.props.match.params.location
    );
    if (housesRes.length>0) {
      let houses = await housesRes.json();
      let available = houses.filter((house) => house.isBooked === false);
      this.setState({ houses: available });
      console.log(houses);
    } else {
      alert("something went wrong while fetching available houses");
    }
  };
  showBooked = async () => {
    let housesRes = await fetch(
      process.env.REACT_APP_BE_URL + this.props.match.params.location
    );
    if (housesRes.length>0) {
      let houses = await housesRes.json();
      let booked = houses.filter((house) => house.isBooked === true);
      this.setState({ houses: booked });
      console.log(houses);
    } else {
      alert("something went wrong while fetching booked houses");
    }
  };
  showAll = async () => {
    let housesRes = await fetch(
      process.env.REACT_APP_BE_URL + "houses/" + this.props.match.params.location
    );
    if (housesRes.ok) {
      let houses = await housesRes.json();
      this.setState({ houses: houses });
      console.log(houses);
    } else {
      alert("something went wrong while fetching houses");
    }
  };


  getRating = async () => {
    let lenght = []
    let avgArr = [];
    await this.state.houses.forEach(async (house) => {
      //literally the worst implementation of it all
      let reviewsDB = await fetch(process.env.REACT_APP_BE_URL + "reviews/" + house.id);
      if (reviewsDB.length>0) {
        let reviews = await reviewsDB.json();
        console.log(reviews);
        let ratarr = reviews.map((rev) => rev.rating)
        let average = ratarr.reduce((a, b) => a + b, 0) / ratarr.length
        lenght.push(ratarr.length)
        avgArr.push(average)
        this.setState({ ratings: avgArr }, () => console.log("Rating averages: ", this.state.ratings))
        this.setState({ lenght: lenght }, () => console.log("Index of ratings", this.state.lenght))
      } else {
        alert("Something went wrong");
      }
    });

  }
  componentDidMount = async () => {
    await this.showAll();
    this.getRating();
  };
  render() {
    return (
      <div className="explore-wrap">
        <NavLocation />
        <div className="explore-body">
          <div className="p">{this.state.houses.length} stays</div>
          <div className="h2">
            <div>Stays in </div>{" "}
            <div className="city">{this.props.match.params.location}</div>
            <Link to={"/" + this.props.match.params.location + "/" + uniqid() + "/add"}>
              <Button variant="light" className="rounded-pill add-btn">
                +
              </Button>{" "}
            </Link>
          </div>
          <div className="filters">
            <Button
              variant="light"
              className="rounded-pill filter-btn"
              onClick={() => this.showAvailable()}
            >
              Available houses
            </Button>
            <Button
              variant="light"
              className="rounded-pill filter-btn"
              onClick={() => this.showBooked()}
            >
              Booked houses
            </Button>
            <Button
              variant="light"
              className="rounded-pill filter-btn"
              onClick={() => this.showAll()}
            >
              All houses
            </Button>
          </div>
          <div className="p mb-5">
            Enter dates and number of guests to see the total price per night.
          </div>{" "}
          {/*this has to be made conditional!!!!*/}
          <div className="p">
            Review COVID-19 travel restrictions before you book.{" "}
            <a href="http://www.salute.gov.it/portale/nuovocoronavirus/dettaglioFaqNuovoCoronavirus.jsp?lingua=english&id=230">
              Learn more
            </a>
          </div>
          <div className="locations-wrap">
            {
              this.state.houses.map((house, index) => {
                //let image = this.state.images.filter(
                //   (img) => img.id === house.id
                // );
                // let firstimg = image[0]
                //let url = [];
                //image.map((img) => url.push(img.img));
                return (
                  <Link
                    to={"/" + house.city.toLowerCase() + "/" + house.id}
                  >
                    <div className="location-clickable-wrap">
                      <div className="location-clickable">
                        <img
                          alt="img"
                          src={house.img ? house.img : "https://placehold.it/500x700"}
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="rating">
                        <AiFillStar style={{ color: "#FF385C", marginRight: '10px' }} />
                        <strong>{this.state.ratings[index]} </strong>&nbsp;∙ {this.state.lenght[index]} ratings
                      </div>
                      <div className="type-and-location">
                        {house.type} ∙ {house.city}
                      </div>
                      <div className="name-of-premises">{house.title}</div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Explore);
