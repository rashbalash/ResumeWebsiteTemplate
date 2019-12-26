import React, { Component } from 'react';

import './About.css';

class About extends Component {

    render() {
        return(
            <div className="aboutContainer">
                <p id="aboutText">{this.props.aboutDescription}</p>
            </div>
        )
    }    
}

export default About;