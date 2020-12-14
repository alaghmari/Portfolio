import React, { Component } from 'react';
import MenuDroit from './MenuDroit';
import Logo from './Logo';
import './MenuHaut.css';

class MenuHaut extends Component{
    
    state = {

    }
  
    
    render() {

        return(
            <div className="menuHaut">
                 <Logo/>
                 <MenuDroit/>
            </div>

            )        
    }
}

export default MenuHaut;