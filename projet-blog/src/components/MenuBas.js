import React, { Component, Fragment } from 'react';
import './MenuBas.css';


class MenuHaut extends Component{

     
    clickForMail(){
        alert('Redirection vers votre messagerie');
    }
    render() {

        return(
            <div className = "menuBas">
               <h1>For any more information, please ask me</h1>
               <button  className="styleButton" 
                    onClick={() => this.clickForMail()}>
                     Email me
                </button>
                <hr/>
                <p>Copyright Amina LAGHMARI 2020</p>
            </div>

            )        
    }
}

export default MenuHaut;