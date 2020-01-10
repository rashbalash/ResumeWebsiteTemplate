import React, { Component } from 'react';

import './Section.css';

class Section extends Component {
    render() {
        return (
            <div className="sectionContainer">
                <p id="sectionText">{this.props.sectionName}</p>
            </div>
        )
    }
    
}

export default Section;