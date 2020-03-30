/*

Every component is going to start he same wat, wer're going to 
 - import React
 - import component from react

 using React router, we're going to import retes
*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// navbar = name of component
// all components extend component
export default class Navbar extends Component {
  // all components have to render something
  // basicallt the navbar from bootstrap adapted to react
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand"><strong>Pick Me Up</strong>  Anxiety Tracker </Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Events</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create User Events Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}