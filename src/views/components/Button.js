import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

export default function Button({ text, to = '/order' }) {
  return (
    <Link to={to}>
      <div className="br-pill yellow-bg tc pa3 pointer">{text}</div>
    </Link>
  )
}
