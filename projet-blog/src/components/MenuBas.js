import React, { Component } from 'react';
import './MenuBas.css';


class MenuHaut extends Component{


    render() {

        return(
            <div className = "menuBas">
               <h3>For any more information, please ask me</h3>
                <a href="mailto:amina.laghmari@gmail.com">Email me</a>
                <p></p>
                <p className="footer">Copyright Amina LAGHMARI 2020</p>
            </div>

            )        
    }
}

export default MenuHaut;