import React from 'react';
import profile from './img/shaneilProfile.jpeg'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My react App</h1>
      <h2>Author: Author Shaneil Kapadia</h2>
      <img src={profile} alt="profile-image" />
    </div>
  );
}

export default App;
