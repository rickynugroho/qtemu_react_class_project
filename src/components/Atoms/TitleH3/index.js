import React, { Component } from 'react';

export default class Image extends Component {
    render() {
        return (
            <h3 className={this.props.className}>{this.props.text}</h3>
        )
    }
}

Image.defaultProps = {
    className: '',
}
