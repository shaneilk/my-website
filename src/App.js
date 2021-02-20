import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialIcon } from 'react-social-icons';
import Tabs from "./components/Tabs";
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

function App() {
  return (
    <div className="App">
      <Tabs>
        <div label="Personal Projects">
          <div>
            <h2 style={{fontFamily: 'Times New Roman'}}>
              DaMatch:
            </h2>
            <p 
              style={{fontFamily: 'Times New Roman'}}
            >
              This DaMatch, it is the game where the objective is to match a symbol from a card in the draw pile with one on the discard pile
              untill all matches are found. It was created as a part of a final group project in CMPT 276. Through three two-week iterations
              I worked with three other team members to create the base of the app, implement different modes, store high scores and 
              customize images on the cards by taking images from a phones photo gallery as well as Flicker.   
            </p>
            <div href="/" className="avatar">
              <img alt="avatar" src={dm1} 
                width="500" 
                height="250"
                style={{margin: '10px 10px 10px 10px'}}
              />
              <img alt="avatar" src={dm2} 
                width="500" 
                height="250"
                style={{margin: '10px 10px 10px 10px'}}
              />
              <img alt="avatar" src={dm3}
                width="500"
                height="250"
                style={{ margin: '10px 10px 10px 10px' }}
              />
            </div>
            <div href="/" className="avatar">
              
            </div>
            <div href="/" className="avatar">
              <img alt="avatar" src={dm4} 
                width="500" 
                height="250"
                style={{margin: '10px 10px 10px 10px'}}
              />
              <img alt="avatar" src={dm5}
                width="500"
                height="250"
                style={{ margin: '10px 10px 10px 10px' }}
              />
            </div>
          </div>

          <div>
            <h2 style={{fontFamily: 'Times New Roman'}}>
              Asteroid Seeker:
            </h2>
            <p 
              style={{fontFamily: 'Times New Roman'}}
            >
              This is the Asteroid Seeker, the objective of this game is to find all the asteroids hidden behind the squares in the least 
              amount of scans with the help of squares that show how many asteroids are nearby. I created this app as a part of a assignment in CMPT 276 with a partner. For this assignment app we had 
              different board sizes and asteroid numbers for different modes as well as a gameboard that stored the amound of times a square
              was clicked in order to check for asteroids near a square.
            </p>
            
            <div href="/" className="avatar">
              <img alt="avatar" src={as1} 
                width="500" 
                height="250"
                style={{margin: '10px 10px 10px 10px'}}
              />
              <img alt="avatar" src={as2} 
                width="500" 
                height="250"
                style={{margin: '10px 10px 10px 10px'}}
              />
              <img alt="avatar" src={as3}
                width="500"
                height="250"
                style={{ margin: '10px 10px 10px 10px' }}
              />
            </div>
            <div href="/" className="avatar">
              
            </div>
            <div href="/" className="avatar">
              <img alt="avatar" src={as4} 
                width="500" 
                height="250"
                style= {{margin: '10px 10px 10px 10px'}}
              />
              <img alt="avatar" src={as5}
                width="500"
                height="250"
                style={{ margin: '10px 10px 10px 10px' }}
              />
            </div>
          </div>

        </div>
        <div label="About Me">
          <div href="/" className="avatar">
            <img alt="avatar" src={profile} 
              width="395"
              height="400" 
            />
            <p
              style={{fontFamily: 'Times New Roman'}}
              
            >
              Hello, my name is Shaneil and I am a third year Computing Science student at Simon Fraser University. I am passionate about Software Development, particularly 
              Mobile and Web Development. Through software engineering courses I've created three Android Apps that are on display on the Personal Projects Tab. In addition
              to this I am learning React and Javascript concurrently, in fact this website was developed from scratch using React. I hope to develop more software in the 
              future that I can share with you all, but in the meantime I hope you enjoy my currently existing projects. 
            </p>
            <SocialIcon url="https://github.com/shaneilk" 
              style= {{margin: '5px 5px 5px 5px'}}
            />
            <SocialIcon url="https://linkedin.com/in/shaneil-kapadia" 
              style= {{margin: '5px 5px 5px 5px'}}
            />
          </div> 
        </div>

      </Tabs>
    </div>
  );
}

export default App;
