import React, { Component } from 'react';

import './MenuDroit.css';


class MenuDroit extends Component{
    redirect(destination) {
        alert('rediriger vers '+destination);   
       }
    
    render() {
        return(
            <div className = "menuDroit">
              <div className = "lien LienHome" onClick = {() => this.redirect('Home')}>
                Home
              </div>
              <div className = "lien LienProjects" onClick = {() =>  this.redirect('Projects')}>
                Projects
              </div>
              <div className = "lien LienBlog" onClick = {() => this.redirect('Blog')}>
                Blog
              </div>
            </div>

            )        
    }
}

export default MenuDroit;