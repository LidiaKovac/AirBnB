import React from "react";
import {Form, Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/Login.scss";

const Login = () => {
  return (
    <div className="login-wrap">
      <Form>
        <Form.Group >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else. <br/>(Unless your password is the same of Netflix, then I will use your account <br/> to watch Brooklyn 99 for the 10th time.)
          </Form.Text>
        </Form.Group>

        <Form.Group >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group >
          <Form.Check type="checkbox" label="I swear this is not my Netflix's password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default Login;
