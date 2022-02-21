import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
  <nav className="navbar navbar-light" id="navbar">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
    </div>
  </nav>
  )
}
Navbar.propTypes = {
    title : PropTypes.string
}