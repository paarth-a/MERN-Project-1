import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Sidebar extends Component {

  
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Paarth Ahuja Blog</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
         
         
          
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
          <Link to ="/signIn" className ="nav-link">Sign In</Link>
        </ul>

       
        </div>
      </nav>
    );
  }
}
