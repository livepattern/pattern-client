import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

export default function Button({ text, to = "/order", onClick }) {
  let classes = "br-pill yellow-bg tc pa3 pointer b"

  if (onClick) {
    return (
      <div className={classes} onClick={onClick}>
        {text}
      </div>
    )
  } else {
    return (
      <Link to={to}>
        <div className={classes}>{text}</div>
      </Link>
    )
  }
}
