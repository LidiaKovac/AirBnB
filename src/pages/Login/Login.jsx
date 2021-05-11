import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.scss";
import Google from '../../assets/google-logo.png'
import Facebook from '../../assets/fb-logo.png'
import GitHub from '../../assets/github-logo.png'
import LinkedIn from '../../assets/linkedin-logo.png'
import { useHistory, Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPW] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const login = async ()=> {
    const res = await axios(`${process.env.REACT_APP_BE_URL}login`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        email, pass
      }, withCredentials: true // use cookies
    })

    localStorage.setItem("accessToken", res.data.accessToken)
  }
  return (
    <div className="login-wrap">
      {loading ?  
    
      <Loader/> 
    
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
          Login
        </Button>
        
        <br/>
        <div className='d-block text-center'>- or -</div> <br/>
      <div className='d-flex text-center justify-content-around'> <a  href={`${process.env.REACT_APP_BE_URL}user/login/google`}><img src={Google} alt='google-login' className='login-logo'/></a> 
        <img src={Facebook} alt='google-login' className='login-logo'/> 
        <img src={LinkedIn} alt='google-login' className='login-logo'/> 
        <img src={GitHub} alt='google-login' className='login-logo'/></div> <br/>
        <Link  className='new-to-airbnb text-center' to='/admin/manage/new'>New to AirBnB?</Link>
        <div><small>Forgot your password? That's too bad man.</small></div>
      </Form>}
    </div>
  );
};
export default Login;
