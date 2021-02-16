
import "./App.scss"
import Home from "./components/Home"
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Explore from "./components/Explore";
import InfoLocation from "./components/InfoLocation";
import AddHouse from "./components/AddHouse"
import Login from "./components/Login";

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
    </Router>
      
    </>
  )
}

export default App
