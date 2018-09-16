import React, { Component } from 'react';
// import Image from 'prop-types';

import Image from '../../Atoms/Image';
import TitleH3 from '../../Atoms/TitleH3';
import LeftRightDescription from '../../Molecules/LeftRightDescription';
import DivText from '../../Atoms/DivText';
import Link from '../../Atoms/Link';

import './style.css';

export default class ActiveMeetup extends Component {
    render() {
        return (
            <DivText className="active-meetup grey-section">
                <Image className="photo-active-meetup" src="img/grey.jpg" alt="grey area" />
                <DivText className="description-active-meetup">
                    <TitleH3 text={this.props.infoMeetup.meetupName} />
                    <DivText className="description-active-meetup-content">
                        <LeftRightDescription>
                            <DivText className="left-content">Location</DivText>
                            <DivText className="right-content">{this.props.infoMeetup.location}</DivText>
                        </LeftRightDescription>
                        <LeftRightDescription>
                            <DivText className="left-content">Members</DivText>
                            <DivText className="right-content">{this.props.infoMeetup.numberOfMembers}</DivText>
                        </LeftRightDescription>
                        <LeftRightDescription>
                            <DivText className="left-content">Organizers</DivText>
                            <DivText className="right-content">{this.props.infoMeetup.headOrganizer}</DivText>
                        </LeftRightDescription>
                        <LeftRightDescription>
                            <Link className="btn" text="Join Us"/>
                        </LeftRightDescription>
                    </DivText>
                </DivText>
            </DivText>
        );
    }
}