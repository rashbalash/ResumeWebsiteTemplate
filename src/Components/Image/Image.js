import React, { Component } from 'react';
import Profile from './Profile.jpg';

import './Image.css';

class Image extends Component {

    render() {
        return(
            <div className="imageContainer">
                <img id="profileImage" src={Profile} alt="Profile" />
            </div>
        )
    }    
}

export default Image;