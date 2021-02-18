
import "./App.scss"
import Home from "./components/pages/Home"
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Explore from "./components/pages/Explore";
import InfoLocation from "./components/pages/InfoLocation";
import AddHouse from "./components/pages/AddHouse"
import Login from "./components/pages/Login";
import Register from "./components/pages/SignUp";

function App() {
  return (
    <>
    <Router>
    <Route exact path='/'>
      <Home />
      </Route>
    <Route exact path='/:location'>
      <Explore/>
    </Route>
    <Route exact path='/:location/:id'>
      <InfoLocation/>
    </Route>
    <Route exact path='/:location/:id/add'>
      <AddHouse/>
    </Route>
    <Route exact path='/admin/manage/login'>
      <Login/>
    </Route>
    <Route exact path ='/admin/manage/new'>
      <Register/>
    </Route>
    </Router>
      
    </>
  )
}

export default App
