import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "./App.css"
import Home from "./views/Home"
import Order from "./views/Order"

const Nav = () => {
  return (
    <div className="nav flex h3 justify-around items-center sans fixed bg-white w-100 top-0">
      <Link to="/">
        <span className="flex items-center serif">
          <span className="logo" /> Pattern
        </span>
      </Link>
      <strong>
        <Link to="/order" className="underline-hover">+1 604 123 5688 | Chat</Link>
      </strong>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />

          <Route exact path="/" component={Home} />
          <Route exact path="/order" component={Order} />
        </div>
      </Router>
    )
  }
}

export default App
