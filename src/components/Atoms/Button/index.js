import React, { Component } from 'react';
import './style.css';

export default class Button extends Component {
    render() {
        return (
            <button type="{this.props.buttonType}" className={this.props.className}>{this.props.text}</button>
        )
    }
}

Image.defaultProps = {
    className: 'btn',
    buttonType: 'submit',
}
