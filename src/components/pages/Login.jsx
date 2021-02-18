import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styling/Login.scss";
import { useHistory, Link } from "react-router-dom";
import Loader from "../Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPW] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    const base64data = btoa(email + ":" + pass); // encoding in base64
    const resp = await fetch("http://localhost:3001/user/login/me", {
      headers: {
        Authorization: "Basic " + base64data,
      },
    });

    if (resp.ok) {
      setLoading(false);
      localStorage.setItem("base64", base64data);
      history.push("/");
    }
  };
  return (
    <div className="login-wrap">
      {loading ?  
     <> <div>Loggin-in, please wait</div>
      <Loader/> 
    </>
      :
      <Form>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else. <br />
            (Unless your password is the same of Netflix, then I will use your
            account <br /> to watch Brooklyn 99 for the 10th time.)
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="********"
            value={pass}
            onChange={(e) => setPW(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="checkbox"
            label="I swear this is not my Netflix's password"
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => login(e)}>
          Submit
        </Button>
        <br/>
        <Link  className='new-to-airbnb text-center' to='/admin/manage/new'>New to AirBnB?</Link>
        <div><small>Forgot your password? That's too bad man.</small></div>
      </Form>}
    </div>
  );
};
export default Login;
