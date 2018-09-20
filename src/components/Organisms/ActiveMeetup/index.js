import React, { Component } from 'react';
// import Image from 'prop-types';

import DivText from '../../Atoms/DivText';

import './style.css';

export default class ActiveMeetup extends Component {
    render() {
        return (
            <DivText className="active-meetup">
                {this.props.children}
            </DivText>
        );
    }
}