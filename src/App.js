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

function App() {
  return (
    <div className="App">
      <Tabs>
        <div label="Personal Projects">
          <div>
            <VideoPlayerLayout
              AppName="Lets-Talk"
              Technologies="(developed in C)"
              VideoLink="https://youtu.be/qjOVqhLsTWk"
              Description="This is program that allows for users at one terminal to communicate with users at another terminal.
              You can optionally communicate with yourself if your remote port value is the same as your own port value. this program allows
              a user to check if the port they wish to communicate with is online.  Communication was facilitated by using UDP sockets and 
              The program was developed using pthreads to allow for multithreading. Synchronization of the pthreads were done through 
              the use of mutexes and semaphores."
            />
            <VideoPlayerLayout
              AppName="CShell"
              Technologies="(developed in C)"
              VideoLink="https://www.youtube.com/watch?v=Ej_ueH1OqO8"
              Description="This cShell was made using multitasking via child processes, it can perform UNIX commands, 
              change theme colours, log previous commands, store environment variables as well as print text and environment variables.
              It can be run in interactive mode where you can type in commands one by one or a script mode where you can give a list of
              commands for it to perform"

            />
          </div>
          <div>
              <FivePhotoAppLayout
                AppName="DaMatch"
                Technologies="(developed in Android Studio using Java)"
                Description="This is DaMatch, the objective of this game is to match a symbol from a card in the draw pile with one 
                on the discard pile untill all matches are found. It was created as a part of a final group project in CMPT 276. Through 
                three two-week iterations I worked with three other team members to create the base of the app, implement different modes, 
                store high scores and customize images on the cards by taking images from a phones photo gallery as well as Flicker."
                photo1={dm1}
                photo2={dm2}
                photo3={dm3}
                photo4={dm4}
                photo5={dm5}
              />
        
              <FivePhotoAppLayout
                AppName="Asteroid Seeker"
                Technologies="(developed in Android Studio using Java)"
                Description="This is the Asteroid Seeker, the objective of this game is to find all the asteroids hidden behind the squares in the least 
                amount of scans with the help of squares that show how many asteroids are nearby. I created this app as a part of a assignment in CMPT 276 with a partner. For this assignment app we had 
                different board sizes and asteroid numbers for different modes as well as a gameboard that stored the amound of times a square
                was clicked in order to check for asteroids near a square."
                photo1={as1}
                photo2={as2}
                photo3={as3}
                photo4={as4}
                photo5={as5}
              />
          </div>
        </div>

        <div label="About Me">
          <div href="/" className="avatar">
            <img alt="avatar" src={profile} 
              width="395"
              height="400" 
            />
            <p style={{fontFamily: 'Times New Roman'}} >
              Hello, my name is Shaneil and I am a third year Computing Science student at Simon Fraser University. I am passionate about Software Development, particularly 
              Mobile and Web Development. Through software engineering courses I've created three Android Apps that are on display on the Personal Projects Tab. In addition
              to this I am learning React and Javascript concurrently, in fact this website was developed from scratch using React. I hope to develop more software in the 
              future that I can share with you all, but in the meantime I hope you enjoy my currently existing projects. 
            </p>
            <SocialIcon 
              url="https://github.com/shaneilk" 
              style={{
                margin: '5px 5px 5px 5px',
                height: 90, width: 90
              }}
            />
            <SocialIcon 
              url="https://linkedin.com/in/shaneil-kapadia" 
              style={{
                margin: '5px 5px 5px 5px',
                height: 90, width: 90
              }}
            />
          </div> 
        </div>
      </Tabs>
    </div>
  );
}

export default App;
