import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "./App.css"
import Home from "./views/home"
import TC from './views/terms'
import Order from "./views/order"
import Header from './views/components/Header'
import ThankYou from './views/thank-you'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Route exact path="/" component={Home} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/terms" component={TC} />
          <Route exact path="/thank-you" component={ThankYou} />
        </div>
      </Router>
    )
  }
}

export default App
