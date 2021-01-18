import React from 'react';
import imgHome from '../images/imgHome.png';



const Home = (props) => {
    return(
    <div className="container">
            <h1>Hello everyone, </h1>
            <h1>My name is Amina LAGHMARI, I am an application developer, living in Annemasse</h1>
            <img src ={imgHome} alt="Bienvenu à l'acceuil" width="100%" />

        </div>
)
}
export default Home;
