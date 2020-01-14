import React, { Component } from 'react';

import './SectionItem.css';

class SectionItem extends Component {

    render() {
        console.log(this.props.itemImageAddress)
        if (this.props.itemImageAddress !== undefined) {
            return (
                <div className="itemContainer">
                    {/* Image */}
                    <img id="itemImage" src={this.props.itemImageAddress} alt="Logo" />
                    <div className="itemContentContainer">
                        <p id="itemName">{this.props.itemName}</p>
                        <p id="itemDescription">{this.props.itemDescription}</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="itemContainer">
                    <div className="itemContentContainer">
                        <p id="itemDescription">{this.props.itemName} | {this.props.itemDescription}</p>
                    </div>
                </div>
            )
        }
        
    }
}

export default SectionItem;