import React from "react";
import "../../styling/Home.scss";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchForm from "../SearchForm";
import Navigation from "../Navigation";
import Suggested from "../Suggested";
import NavLocation from "../Location-SearchBar";
import { withRouter } from "react-router-dom";
import stringSimilarity from 'string-similarity'

class Home extends React.Component {
  state = {
    scrolled: false,
    cities: [],
  };
  componentDidMount = async () => {
    window.onscroll = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        this.setState({ scrolled: true });
      } else this.setState({ scrolled: false });
    };
    const response = await fetch(process.env.REACT_APP_BE_URL + "houses");
    let data = await response.json();
    let cityARR = data.map((house) => house.city);
    let cities = new Set(cityARR);
    this.setState({ cities: [...cities] });
  };
  saveData = async (data) => {
    await this.setState({ data: data }, () => console.log(this.state.data));
    console.log(this.state.data, this.state.cities)
    let bestMatch = await stringSimilarity.findBestMatch(this.state.data, this.state.cities)
    console.log(bestMatch.bestMatch.target)
    this.props.history.push(`/${bestMatch.bestMatch.target}`);
  };

  render() {
    return (
      <>
        <div className="home-wrapper">
          {this.state.scrolled ? (
            <NavLocation getQ={this.saveData} />
          ) : (
            <Navigation />
          )}
          <div className="home-search">
            <div className="home-title">
              Go Near
              <Button className="home-btn">Explore nearby stays</Button>
            </div>
          </div>
          {!this.state.scrolled && (
            <div className="search-wrap">
              <div className="search-form">
                <SearchForm getData={this.saveData} />
              </div>
            </div>
          )}
          <Suggested cities={this.state.cities} />
        </div>
      </>
    );
  }
}
export default withRouter(Home);
