import React, { Component } from 'react';

import './SectionItem.css';

class SectionItem extends Component {
    render() {
        return (
            <div className="itemContainer">
                {/* Image */}
                <img id="itemImage" src={this.props.itemImageAddress} alt="Logo" />
                <p id="itemName">{this.props.itemName}</p>
                <p id="itemDescription">{this.props.itemDescription}</p>
            </div>
        )
    }
}

export default SectionItem;