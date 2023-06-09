import React from 'react'
import PropTypes from 'prop-types'   //type impt

// props- properties through which if i made a component and i want to pass or change some things then props can be used OR Props are arguments passed into React components.
// props are a type of object where the value of attributes of a tag is stored
//eg. here- {props.title} 
export default function Navbar(props) {
  return (
    <nav className="navbar bg-dark bg-body-tertiary" data-bs-theme="dark" >
         <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Home</a></li>
             <li className="nav-item"><a className="nav-link" href="/">{props.aboutText}</a></li>
            </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

//  if we explicilty pass values in navbar component
Navbar.propTypes = {title:PropTypes.string,
  aboutText :PropTypes.string}

  // if we want to set default navbar component
  Navbar.defaultProps={
    title: 'set Title here',
    aboutText: 'About text'
  }
