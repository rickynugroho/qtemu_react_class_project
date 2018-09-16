import React, { Component } from 'react';
import './style.css';

export default class LeftRightDescription extends Component {
    render() {
        return (
            <div className="description-active-meetup-left">
                {this.props.children}            
                {/* <div className="left-content">{this.props.leftText}</div>
                <div className="right-content">{this.props.rightText}</div> */}
            </div>
        )
    }
}

// Image.defaultProps = {
//     className: '',
// }
