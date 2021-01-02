import logo from "./logo.svg"
import "./App.css"
import Home from "./components/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Explore from "./components/Explore";

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
    </Router>
      
    </>
  )
}

export default App
