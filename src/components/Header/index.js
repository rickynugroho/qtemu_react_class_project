import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './style.css';

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="header-link">
                        <a onClick={() => { this.setState({ 'tanggal': 123 }) }} className="title">QTemu</a>
                        <a href="">Create Meetup</a>
                        <a href="">Explore</a>
                    </div>
                    <div>
                        <a href="">Login</a>
                    </div>
                </div>
            </div>
        );
    }
}