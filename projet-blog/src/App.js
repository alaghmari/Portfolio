import React, { Component} from 'react';
import {BrowserRouter, Route ,Switch} from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import './App.css';
import Projects from './components/Projects';
import ErrorPage from './components/ErrorPage';
import MenuDroit from './components/MenuDroit';
import MenuBas from './components/MenuBas';


class App extends Component {
 
  render () { 
  return (
    <div className="App">
      <BrowserRouter>
        <MenuDroit />
           <Switch>
            <Route path ="/" component={Home} exact={true}/>
            <Route path="/projects"component={Projects} />
            <Route path="/blog"component={Blog} />  
            <Route component={ErrorPage}/>
          </Switch>
      <MenuBas/>
    </BrowserRouter>
    </div>
  );
}
}
export default App;
