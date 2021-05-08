import React from 'react';
import { SocialIcon } from 'react-social-icons';
import ReactPlayer from 'react-player';

import Tabs from "./components/Tabs";
import FivePhotoAppLayout from "./components/FivePhotoAppLayout";
import VideoPlayerLayout from "./components/VideoPlayerLayout";
import profile from './img/shaneilProfile.jpeg';
import as1 from './img/asteroidSeekerImages/mainscreen.jpeg';
import as2 from './img/asteroidSeekerImages/instructions.jpeg';
import as3 from './img/asteroidSeekerImages/smallboard.jpeg';
import as4 from './img/asteroidSeekerImages/bigboard.jpeg';
import as5 from './img/asteroidSeekerImages/winscreen.jpeg';

import dm1 from './img/daMatchImages/mainmenu.jpeg';
import dm2 from './img/daMatchImages/gamestart3images.jpeg';
import dm3 from './img/daMatchImages/gameduring3images.jpeg';
import dm4 from './img/daMatchImages/flickergallery.jpeg';
import dm5 from './img/daMatchImages/highscores.jpeg';
import './App.css';
import Home from './Home.js'
import AboutMe from './AboutMe.js'
import Projects from './Projects.js'
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/my-website" component={Projects} />
        <Route exact path="/my-website/about" component={AboutMe} />
      </Switch>
      
    </div>
  );
}

export default App;
