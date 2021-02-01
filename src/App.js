import React from 'react';
import Tabs from "./components/Tabs";
import profile from './img/shaneilProfile.jpeg'
import './App.css';

function App() {
  return (
    <div className="App">
      <Tabs>
        <div label="Home">
          This is the Home page
        </div>
        <div label="About Me">
          This is the About me Page
        </div>
        <div label="Contact Me">
          This is where you can find information to contact me
        </div>
      </Tabs>
      <h1>My react App</h1>
      <h2>Author: Author Shaneil Kapadia</h2>
      <img src={profile} alt="profile-image" />
    </div>
  );
}

export default App;
