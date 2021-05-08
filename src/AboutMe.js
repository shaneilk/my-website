import React from 'react'
import { SocialIcon } from 'react-social-icons';
import profile from './img/shaneilProfile.jpeg';

import './App.css';

function AboutMe() {
    return (
        <div>
            <h1> About me </h1>
            <div label="About Me">
                <div href="/" className="avatar">
                    <img alt="avatar" src={profile}
                        width="395"
                        height="400"
                    />
                    <p style={{ fontFamily: 'Times New Roman' }} >
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
        </div>
    )
}

export default AboutMe;