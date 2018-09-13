import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import HeaderLink from '../../Molecules/HeaderLink';
import Link from '../../Atoms/Link';

import './style.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <HeaderLink>
                    <Link text="Qtemu" className="title" />
                    <Link text="Create Meetup" />
                    <Link text="Explore" />
                </HeaderLink>
                <div>
                    <Link text='Login' />
                </div>
            </div>
        )
    }
}