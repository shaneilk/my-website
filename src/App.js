import React from 'react';
import './App.css';

import AboutMe from './AboutMe.js'
import Projects from './Projects.js'
import { HashRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar.js';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route>
            <Projects />
          </Route>
          <Route>
            <AboutMe />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
