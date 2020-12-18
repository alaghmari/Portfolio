import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import logo from '../logo.png';

import './MenuDroit.css';


class MenuDroit extends Component{
  


       render() {
        return(       
            <nav className = "menuDroit">
              <div className="logoBorder">
                <img src ={logo} alt="It is my logo"></img>
              </div>  
             <div className="links-container">
                <NavLink to="/home">
                  Home
                </NavLink>
                <NavLink to="/projects">
                  Projects
                </NavLink>
                <NavLink to="/blog">
                  Blog
                </NavLink>
                </div>
              </nav>

            )        
    }
  }

export default MenuDroit;


