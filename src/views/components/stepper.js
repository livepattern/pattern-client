import React, { Component } from "react"

class Stepper extends Component {
  constructor() {
    super()
    this.state = {
      value: 0
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    this.setState({ value: this.state.value + 1 })
  }

  decrement() {
    this.setState({ value: Math.max(this.state.value - 1, 0) })
  }

  render() {
    return (
      <div className="flex">
        <div
          className="h2 w2 f3 br-100 bg-white flex items-center justify-center mr2 pointer"
          onClick={this.decrement}
        >
          -
        </div>
        <div
          className="h2 w2 f3 br-100 bg-white flex items-center justify-center mr2 pointer"
          onClick={this.increment}
        >
          +
        </div>
        <div className="f3">
          {this.state.value}
        </div>
      </div>
    )
  }
}

export default Stepper
