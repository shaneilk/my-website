import React from 'react';
import './App.css';

import AboutMe from './AboutMe.js'
import Projects from './Projects.js'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/my-website" component={Projects} />
          <Route path="/about" component={AboutMe} />
          <Route component={() => (<div>404 Not found </div>)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
