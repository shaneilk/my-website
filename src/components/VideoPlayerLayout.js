import React from 'react';
import ReactPlayer from 'react-player';


const VideoPlayerLayout = (props) => {
    return(
        <div>
            <h2 style={{ fontFamily: 'Times New Roman'}}>
                {props.AppName} <br>
                </br>(developed in C)
            </h2>
            <p style={{ fontFamily: 'Times New Roman'}}>
                {props.Description}
            </p>
            <ReactPlayer url={props.VideoLink}/>
        </div>
    );
}

export default VideoPlayerLayout;