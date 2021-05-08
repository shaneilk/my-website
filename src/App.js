import React from 'react';
import './App.css';

import AboutMe from './AboutMe.js'
import Projects from './Projects.js'
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar.js';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/my-website">
          <Projects />
        </Route>
        <Route path="/my-website/about">
          <AboutMe />
        </Route>
      </Switch>
    </div>
  );
}


export default App;
