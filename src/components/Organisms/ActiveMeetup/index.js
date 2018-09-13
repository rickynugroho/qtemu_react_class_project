import React, { Component } from 'react';
// import Image from 'prop-types';

import Image from '../../Atoms/Image';
import TitleH3 from '../../Atoms/TitleH3';

import './style.css';

export default class ActiveMeetup extends Component {
    render() {
        return (
            <div className="active-meetup grey-section">
                <Image className="photo-active-meetup" src="img/grey.jpg" alt="grey area" />
                <div className="description-active-meetup">
                    <TitleH3 text="Hacktive8 Meetup" />
                    <div className="description-active-meetup-content">
                        <div className="description-active-meetup-left">
                            <div className="left-content">Location</div>
                            <div className="right-content">Jakarta, Indonesia</div>
                        </div>
                        <div className="description-active-meetup-left">
                            <div className="left-content">Members</div>
                            <div className="right-content">1,078</div>
                        </div>
                        <div className="description-active-meetup-left">
                            <div className="left-content">Organizers</div>
                            <div className="right-content">Adhy Wiranata</div>
                        </div>
                        <div className="description-active-meetup-left">
                            <div>
                                <a href="" className="btn">Join Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}