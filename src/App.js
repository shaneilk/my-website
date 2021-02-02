import React from 'react';
import Tabs from "./components/Tabs";
import profile from './img/shaneilProfile.jpeg';
import as1 from './img/asteroidSeekerImages/mainscreen.jpeg';
import as2 from './img/asteroidSeekerImages/instructions.jpeg';
import as3 from './img/asteroidSeekerImages/winscreen.jpeg';
import dm1 from './img/daMatchImages/mainmenu.jpeg';
import dm2 from './img/daMatchImages/gamestart3images.jpeg';
import dm3 from './img/daMatchImages/gameduring3images.jpeg';

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
            <p style={{fontFamily: 'Times New Roman'}}>
              This is the DaMatch App, I created this app alongside 3 other team members that I worked with in a Scrum team. Through three two-week iterations we were able to
              create the base of the app, implement different modes, store high scores and customize images on the cards that we had to match by taking images from the google
              photo gallery as well as Flicker   
            </p>
            <div href="/" className="avatar">
              <img alt="avatar" src={dm1} 
                width="300" 
                height="150"
                style= {{margin: '10px 10px 10px 10px'}}
              />
              <img alt="avatar" src={dm2} 
                width="300" 
                height="150"
                style= {{margin: '10px 10px 10px 10px'}}
              />
            </div>
            <div href="/" className="avatar">
              
            </div>
            <div href="/" className="avatar">
              <img alt="avatar" src={dm3} 
                width="300" 
                height="150"
                style= {{margin: '10px 10px 10px 10px'}}
              />
            </div>
          </div>

          <div>
            <h2 style={{fontFamily: 'Times New Roman'}}>
              Asteroid Seeker:
            </h2>
            <p style={{fontFamily: 'Times New Roman'}}>
              This is the Asteroid Seeker App, I created this app along with a classmate. This the purpose of this game is to find all of the asteroids that are hidden behind
              the squares in the least amount of searches. For this assignment app we had different board sizes and asteroid numbers for different modes as well as a gameboard
              that stored the amound of times a square was clicked in order to check for asteroids near a square.
            </p>
            
            <div href="/" className="avatar">
              <img alt="avatar" src={as1} 
                width="300" 
                height="150"
                style= {{margin: '10px 10px 10px 10px'}}
              />
              <img alt="avatar" src={as2} 
                width="300" 
                height="150"
                style= {{margin: '10px 10px 10px 10px'}}
              />
            </div>
            <div href="/" className="avatar">
              
            </div>
            <div href="/" className="avatar">
              <img alt="avatar" src={as3} 
                width="300" 
                height="150"
                style= {{margin: '10px 10px 10px 10px'}}
              />
            </div>
          </div>

          <p style={{fontFamily: 'Times New Roman'}}>
            This is the Camera Depth of Field app. The purpose of this app is to calculate the range where a subject would be in focus given a camera lens and aperture
          </p>
        </div>

        <div label="Contact Me">
          This is where you can find information to contact me
        </div>

        <div label="About Me">
          <div href="/" className="avatar">
            <img alt="avatar" src={profile} 
              width="395"
              height="400" 
            />
          </div> 
        </div>

      </Tabs>
    </div>
  );
}

export default App;
