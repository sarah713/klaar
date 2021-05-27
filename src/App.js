import React,{ useEffect, useState } from 'react';
import './App.css';
import Tables from './components/Tables';
import Pagination from './components/Pagination';
import {BrowserRouter as Router,Link, Route,Switch} from 'react-router-dom';
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
