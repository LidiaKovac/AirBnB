import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Button } from "react-bootstrap";
import "../styling/AddHouse.scss";
import { withRouter } from "react-router-dom";
import Navigation from "./Navigation";

class AddHouse extends React.Component {
  state = {
    newHouse: {
      address: {
        street: "",
        city: this.props.match.params.location,
        "zip code": "",
        country: "",
      },
      title: "",
      description: "",
      price: 0,
      rooms: 0,
      house: "",
      facilities: "",
      host: "",
      isBooked: false,
      id: this.props.match.params.id,
    }

  };
  handleImages = async (e) => {
    this.setState({ images: e.target.files[0] }, () => console.log(this.state.images))
    let image = new FormData()
    image.append("img", this.state.images)
    await this.setState({ img: image }, () =>
      console.log(this.state.images)
    );
    try {
      await fetch(
        "http://localhost:3001/houses/" +
        this.props.match.params.location + "/" +
        this.props.match.params.id +
        "/upload",
        {
          method: "POST",
          body: this.state.img
        },

      );
    } catch (error) {
      console.log(error)
    }


  };

  handleChange = (e) => {
    if (
      e.target.id !== "street" &&
      e.target.id !== "city" &&
      e.target.id !== "zip code" &&
      e.target.id !== "country"
    ) {
      this.setState(
        {
          newHouse: {
            ...this.state.newHouse,
            [e.target.id]: e.currentTarget.value,
          },
        },
        () => console.log(this.state.newHouse)
      );
    } else {
      this.setState(
        {
          newHouse: {
            ...this.state.newHouse,
            address: {
              ...this.state.newHouse.address,
              [e.target.id]: e.currentTarget.value,
            },
          },
        },
        () => console.log(this.state.newHouse)
      );
    }
  };

  postHouse = async () => {
    try {
      const response = await fetch("http://localhost:3001/houses", {
        method: "POST",
        body: JSON.stringify(this.state.newHouse),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        {" "}
        <Navigation />
        <div className="add-wrap">
          <div className="form-wrap">
            <Form>
              <h4>General info:</h4>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Name of the premise</Form.Label>
                  <Form.Control
                    onChange={(e) => this.handleChange(e)}
                    id="title"
                    type="text"
                    placeholder="The small house"
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Host name: </Form.Label>
                  <Form.Control
                    onChange={(e) => this.handleChange(e)}
                    id="host"
                    placeholder="John Doe"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Group>
                <Form.Label>Description: </Form.Label>
                <Form.Control
                  onChange={(e) => this.handleChange(e)}
                  as="textarea"
                  placeholder="Describe your place..."
                  rows={5}
                  id="description"
                />
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Price: </Form.Label>
                  <Form.Control
                    onChange={(e) => this.handleChange(e)}
                    type="number"
                    placeholder="xx/night"
                    id="price"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Rooms: </Form.Label>
                  <Form.Control
                    onChange={(e) => this.handleChange(e)}
                    type="number"
                    placeholder="2"
                    id="rooms"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Type:</Form.Label>
                  <Form.Control
                    onChange={(e) => this.handleChange(e)}
                    as="select"
                    defaultValue="Apartment"
                    id="house"
                  >
                    <option value="Apartment">Apartment</option>
                    <option value="House">Independent House</option>
                    <option value="Room">Room</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Group>
                <Form.Label>Facilities:</Form.Label>
                <Form.Control
                  onChange={(e) => this.handleChange(e)}
                  as="textarea"
                  placeholder="List facilities, services next to the premise etc..."
                  rows={8}
                  id="facilities"
                />
              </Form.Group>
              <h4>Address: </h4>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Street</Form.Label>
                  <Form.Control
                    onChange={(e) => this.handleChange(e)}
                    placeholder="1234 Main St"
                    id="street"
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    onChange={(e) => this.handleChange(e)}
                    placeholder="Milan, London..."
                    value={this.props.match.params.location}
                    disabled
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>ZIP</Form.Label>
                  <Form.Control
                    onChange={(e) => this.handleChange(e)}
                    placeholder="0000, XXN NXX..."
                    type="text"
                    id="zip code"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    onChange={(e) => this.handleChange(e)}
                    type="text"
                    placeholder="Italy, UK, USA, France..."
                    id="country"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Group>
                <Form.Label>
                  Add photos: (5 is the raccomended amount)
                </Form.Label>{" "}
                {/*unfortunately I could not make the multiple upload work on the
                backend*/}
                <Form>
                  <Form.File.Input
                    id="images"
                    label="Add an image here"
                    accept="image/x-png,image/gif,image/jpeg"
                    name="image"
                    enctype="multipart/form-data"
                    onChange={(e) => this.handleImages(e)}
                  />
                </Form>
              </Form.Group>
              <Button variant="primary" className="add-btn" onClick={() => this.postHouse()}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(AddHouse);
