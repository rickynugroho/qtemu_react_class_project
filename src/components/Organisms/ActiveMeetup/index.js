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
            <div className="active-meetup grey-section">
                <Image className="photo-active-meetup" src="img/grey.jpg" alt="grey area" />
                <div className="description-active-meetup">
                    <TitleH3 text={this.props.infoMeetup.meetupName} />
                    <div className="description-active-meetup-content">
                        <LeftRightDescription>
                            <DivText className="left-content" text="Location" />
                            <DivText className="right-content" text={this.props.infoMeetup.location} />
                        </LeftRightDescription>
                        <LeftRightDescription>
                            <DivText className="left-content" text="Members" />
                            <DivText className="right-content" text={this.props.infoMeetup.numberOfMembers} />
                        </LeftRightDescription>
                        <LeftRightDescription>
                            <DivText className="left-content" text="Organizers" />
                            <DivText className="right-content" text={this.props.infoMeetup.headOrganizer} />
                        </LeftRightDescription>
                        <LeftRightDescription>
                            <Link className="btn" text="Join Us"/>
                        </LeftRightDescription>
                    </div>
                </div>
            </div>
        );
    }
}