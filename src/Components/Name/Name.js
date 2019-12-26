import React, { Component } from 'react';

import './Name.css';

class Name extends Component {

    render() {
        return(
            <div className="nameContainer">
                <p id="nameText">{this.props.fullName}</p>
            </div>
        )
    }    
}

export default Name;