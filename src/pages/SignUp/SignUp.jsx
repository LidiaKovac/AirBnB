import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.scss";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Row } from "react-bootstrap";
import Loader from "../../components/Loader/Loader.jsx";
const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [last_name, setLName] = useState("");
  const [pass, setPW] = useState("");
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);
    const user = {
      name: name,
      last_name: last_name,
      password: pass, //will be hashed by the b-e
      email: email,
      role: "basic",
    };
    const base64data = btoa(email + ":" + pass); // encoding in base64
    const fd = new FormData();
    console.log(file);
    fd.append("user-image", file); //do not await
    fd.append("name", name);
    fd.append("last_name", last_name);
    fd.append("password", pass);
    fd.append("email", email);
    fd.append("role", "basic");
    console.log([...fd]);
    const resp = await fetch("http://localhost:3001/user", {
      method: "POST",
      body: fd,
      //redirect: 'follow'
    });

    if (resp.ok) {
      setLoading(false);
      localStorage.setItem("base64", base64data);
      history.push("/");
    }
  };

  return (
    <div className="register-wrap">
      <div className="login-wrap">
        {loading ? (
          <>
            {" "}
            <div>Loggin-in, please wait</div>
            <Loader />
          </>
        ) : (
          <Form className="w-50 d-flex flex-column justify-content-center">
            <Row className="d-flex justify-content-center">
              <Form.Group className="mr-1 w-50">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="john@family.biz"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mr-1 w-50">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="********"
                  value={pass}
                  onChange={(e) => setPW(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="d-flex flex-row justify-content-center">
              <Form.Group className="mr-1 w-50">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="John"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mr-1 w-50">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Winchester"
                  value={last_name}
                  onChange={(e) => setLName(e.target.value)}
                />
              </Form.Group>

              <Form.File
                id="custom-file"
                label="Custom file input"
                custom
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Row>
            <div className="button-submit">
              <Button
                className="w-25 btn-sub"
                type="submit"
                onClick={(e) => signup(e)}
              >
                Create account
              </Button>
            </div>

            <br />
            <Link
              className="new-to-airbnb text-center"
              to="/admin/manage/login"
            >
              Already on AirBnB?
            </Link>
          </Form>
        )}
      </div>
    </div>
  );
};
export default Register;
