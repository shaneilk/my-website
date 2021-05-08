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
import AboutMe from './AboutMe.js'
import Projects from './Projects.js'
import { Route, Link } from 'react-router-dom';

function Home(){
    return(
        <div>
            <h1>Welcome to the Home page</h1>
        </div>
    )
}

export default Home;
