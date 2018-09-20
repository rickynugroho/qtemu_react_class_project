import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import HeaderLink from '../../Molecules/HeaderLink';
import Link from '../../Atoms/Link';

import './style.css';

export default class Header extends Component {
    constructor() {
        super();

        this.state = {
            classTest : 'header',
        };
    }

    addClass() {
        let currentClass = this.state.classTest;
        this.setState({
            classTest: currentClass + ' ' + this.props.addClassOnClick,
        });
    }

    render() {
        return (
            <div className={this.state.classTest} onClick={() => this.addClass()}>
                <HeaderLink>
                    <Link text="Qtemu" className="title" />
                    <Link text="Create Meetup" className="header-reg-link" />
                    <Link text="Explore" className="header-reg-link" />
                </HeaderLink>
                <div>
                    <Link text='Login' />
                </div>
            </div>
        )
    }
}