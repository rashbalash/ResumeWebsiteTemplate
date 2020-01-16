import React, { Component } from 'react';

import './SectionItem.css';

class SectionItem extends Component {

    render() {
        if (this.props.itemImageAddress !== undefined && (this.props.itemLink === undefined || this.props.itemLink === "")) {
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
        } else if (this.props.itemImageAddress !== undefined && this.props.itemLink !== undefined) {
            return (
                <div className="itemContainer">
                    {/* Image */}
                    <img id="itemImage" src={this.props.itemImageAddress} alt="Logo" />
                    <div className="itemContentContainer">
                        <p id="itemName"><a id="itemLink" href={this.props.itemLink} target="_blank" rel="noopener noreferrer">{this.props.itemName}</a></p>
                        <p id="itemDescription">{this.props.itemDescription}</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="skillContainer">
                    <div className="itemContentContainer">
                        <p id="itemDescription">{this.props.itemName} | {this.props.itemDescription}</p>
                    </div>
                </div>
            )
        }
        
    }
}

export default SectionItem;