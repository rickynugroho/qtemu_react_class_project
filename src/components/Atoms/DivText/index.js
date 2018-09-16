import React, { Component } from 'react';

export default class DivText extends Component {
    render() {
        return (
            <div className={this.props.className}>{this.props.text}</div>
        )
    }
}

Image.defaultProps = {
    className: '',
}
