import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import Link from '../../Atoms';

export default class HeaderLink extends Component {
    render() {
        return (
            <div className="header-link">
                {this.props.children}
            </div>
        )
    }
}