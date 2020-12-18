import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import logo from '../logo.png';

import './MenuDroit.css';


class MenuDroit extends Component{
  

  render() {
    return(   
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
              <div className="logoBorder">
                    <img src ={logo} alt="It is my logo"></img>
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/home">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/projects">
                    Projects
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/blog">
                    Blog
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

)        
}
}

export default MenuDroit;

