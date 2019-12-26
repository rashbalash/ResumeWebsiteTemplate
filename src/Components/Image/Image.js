import React, { Component } from 'react';

import './Image.css';

class Image extends Component {

    render() {
        return(
            <div className="imageContainer">
                <img src={this.props.imageAddress} alt="Profile" />
            </div>
        )
    }    
}

export default Image;