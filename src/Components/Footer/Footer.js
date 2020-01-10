import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
    
    getYear = () => {
        var date = new Date().getFullYear(); 
        return <p id="copyright">{this.props.fullName} &copy; { date }</p>
    }

    render() {
        return (
            <div id="footer">
              <footer>{ this.getYear() }</footer>
            </div>
        );
    }
}

export default Footer;