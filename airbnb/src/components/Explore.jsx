import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import "../styling/Explore.scss";
import NavLocation from "./Location-SearchBar";
import {Link} from 'react-router-dom'

class Explore extends React.Component {
  render() {
    return (
      <div className="explore-wrap">
        <NavLocation />
        <div className="explore-body">
          <div className="p">300+ stays</div>
          <div className="h2">
            <strong>Stays in [location]</strong>
          </div>
          <div className="filters">
            <Button variant="light" className="rounded-pill filter-btn">
              Cancellation flexibility
            </Button>
            <Button variant="light" className="rounded-pill filter-btn">
              Type of place
            </Button>
            <Button variant="light" className="rounded-pill filter-btn">
              Price
            </Button>
            <Button variant="light" className="rounded-pill filter-btn">
              Instant book
            </Button>
            <Button variant="light" className="rounded-pill filter-btn">
              More filters
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
            <Link to='/:location/:premises'><div className="location-clickable-wrap">
              <div className="location-clickable"></div>
              <div className="rating">
                <AiFillStar style={{ color: "#FF385C" }} />
                [rating], [number of reviews]
              </div>
              <div className='type-and-location'>
                [type of location] ∙ [location]
              </div>
              <div className='name-of-premises'>
                [Name of the place]
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Explore;
