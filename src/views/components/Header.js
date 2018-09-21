import React from "react"
import logo from "../../images/logo.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="nav flex h3 justify-between ph3 ph5-l items-center sans fixed bg-white w-100 top-0 z-5">
      <Link to="/">
        <img src={logo} width={120} />
      </Link>
      <span className="dn-ns">
      <a className="underline-hover mr2 b" href="tel:1-562-867-5309">
          Call
        </a>{" "}
        |
        <a
          className="underline-hover ml2 b"
          href="mailto:contact@livepattern.com"
        >
          Email
        </a>
      </span>
      <span className="dn db-l db-m">
        <a className="underline-hover mr2 b" href="tel:1-562-867-5309">
          1-555-444-5555
        </a>{" "}
        |
        <a
          className="underline-hover ml2 b"
          href="mailto:contact@livepattern.com"
        >
          contact@livepattern.com
        </a>
      </span>
    </div>
  )
}

export default Header
