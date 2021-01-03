import logo from "./logo.svg"
import "./App.scss"
import Home from "./components/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Explore from "./components/Explore";
import InfoLocation from "./components/InfoLocation";

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
    <Route exact path='/:location/:premises'>
      <InfoLocation/>
    </Route>
    </Router>
      
    </>
  )
}

export default App
