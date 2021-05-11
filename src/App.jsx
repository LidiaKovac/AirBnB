
import "./App.scss"
import Home from "./pages/Home/Home"
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Explore from "./pages/Explore/Explore";
import InfoLocation from "./pages/Location/InfoLocation";
import AddHouse from "./pages/AddHouse/AddHouse"
import Login from "./pages/Login/Login";
import Register from "./pages/SignUp/SignUp";

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
