import React, { Component } from 'react';
import './style.css';

export default class Link extends Component {
    render() {
        return (
            <a href={this.props.linkUrl} className={this.props.className}>{this.props.text}</a>
        )
    }
}

Link.defaultProps = {
    className: '',
    linkUrl: '#',
}