import React,{  } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Favorites from './components/Favorites';
import Home from './components/Home';

function App() {
 
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path='/favorites' exact component={Favorites}/>
      </Switch>
      </Router>
  );
}

export default App;
