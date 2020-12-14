import React, { Component} from 'react';
import {BrowserRooter, Route ,Switch} from 'react-router-dom';
import MenuHaut from './components/MenuHaut';
import MenuBas from './components/MenuBas';

import './App.css';

class App extends Component {
  state = {
    page: 'page par défaut'
}

  render () { 
  return (
    <div className="App">
      <BrowserRooter>
      <MenuHaut />
      <switch> 
        <Route  /> 
        <Route  /> 
        <Route  /> 
        <Route  /> 
      </switch>
      <MenuBas/>
      </BrowserRooter>
    </div>
  );
}
}
export default App;
