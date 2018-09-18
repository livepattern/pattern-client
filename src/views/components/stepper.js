import React, { Component } from "react"
import classNames from "classnames"

const Counter = ({ children, onClick, value, hasMin = false, min }) => {
  const classes = classNames({
    "h2 w2 f3 br-100 bg-white flex items-center justify-center mr2 user-select-none": true,
    "pointer link dim": hasMin ? value > min : true,
    "moon-gray forbidden": hasMin ? value <= min : false
  })
  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  )
}

class Stepper extends Component {
  render() {
    return (
      <div className="flex">
        <div className="flex mr3">
          <Counter
            onClick={this.props.decrement}
            value={this.props.quantity}
            hasMin
            min={0}
          >
            -
          </Counter>
          <Counter onClick={this.props.increment} value={this.props.quantity}>
            +
          </Counter>
        </div>
        <div className="f4">{this.props.quantity}</div>
      </div>
    )
  }
}

export default Stepper
