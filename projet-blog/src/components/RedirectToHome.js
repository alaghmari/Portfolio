import React, { Component } from 'react'

const RedirectToHome = (props) =>{
   props.history.push('/home')
   return(<div></div>) 
}
    
    
export default RedirectToHome
