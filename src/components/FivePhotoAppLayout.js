import React from 'react';
import ReactDOM from 'react-dom';


const FivePhotoAppLayout = (props) => {
    return(
        <div>
            <h2 style={{ fontFamily: 'Times New Roman' }}>
                {props.AppName}
            </h2>
            <p
                style={{fontFamily: 'Times New Roman'}}
            >
                {props.Description}
            </p>
            <div href="/" className="avatar">
                <img alt="avatar" src={props.photo1}
                    width="500"
                    height="250"
                    style={{ margin: '10px 10px 10px 10px' }}
                />
                <img alt="avatar" src={props.photo2}
                    width="500"
                    height="250"
                    style={{ margin: '10px 10px 10px 10px' }}
                />
                <img alt="avatar" src={props.photo3}
                    width="500"
                    height="250"
                    style={{ margin: '10px 10px 10px 10px' }}
                />
                <img alt="avatar" src={props.photo4}
                    width="500"
                    height="250"
                    style={{ margin: '10px 10px 10px 10px' }}
                />
                <img alt="avatar" src={props.photo5}
                    width="500"
                    height="250"
                    style={{ margin: '10px 10px 10px 10px' }}
                />
            </div>
        </div>        
    );
}

export default FivePhotoAppLayout;