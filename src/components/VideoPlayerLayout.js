import React from 'react';
import ReactPlayer from 'react-player';


const VideoPlayerLayout = (props) => {
    return(
        <div>
            <h2 style={{ fontFamily: 'Times New Roman'}}>
                {props.AppName} <br>
                </br>
                {props.Technologies}
            </h2>
            <p style={{ fontFamily: 'Times New Roman'}}>
                {props.Description}
            </p>
            <ReactPlayer 
                url={props.VideoLink}
                width= '60%'
                height='640px'
                pip={true}
                controls={true}
            />
        </div>
    );
}

export default VideoPlayerLayout;