import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './style.css';

export default class ActiveMeetup extends Component {
    render() {
        return (
            <div className="active-meetup grey-section">
                <div className="photo-active-meetup">
                    <img src="img/grey.jpg" alt="grey area" />
                </div>
                <div className="description-active-meetup">
                    <h3>Hacktive8 Meetup</h3>
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