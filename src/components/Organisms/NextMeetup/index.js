import React, { Component } from 'react';
// import Image from 'prop-types';

// import Image from '../../Atoms/Image';
// import LeftRightDescription from '../../Molecules/LeftRightDescription';
import TitleH3 from '../../Atoms/TitleH3';
// import Link from '../../Atoms/Link';
import DivText from '../../Atoms/DivText';
import GreySection from '../../Molecules/GreySection';

import './style.css';

export default class NextMeetup extends Component {
    render() {
        return (
            <DivText className="container-section">
                <TitleH3>Next Meetup</TitleH3>
                <GreySection>
                    <DivText className="next-meetup-title">
                        Awesome meetup and event
                    </DivText>
                    <DivText className="next-meetup-date">
                        {this.props.tanggal}
                    </DivText>
                    <DivText className="next-meetup-p">
                        <p>
                            Hello, JavaScript & Node.js Ninjas!<br />
                            Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018!<br />
                            The meetup format will contain some short stories and technical talks.<br />
                            If you have short announcement you'd like to share with the audience, you may do so during open mic accouncement.
                        </p>
                        <p>
                            Remember to bring a photo ID to get through building security.
                        </p>
                        <p>
                            -----
                        </p>
                        <p>
                            See you there!
                        </p>
                        <p>
                            Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers
                        </p>
                    </DivText>
                </GreySection>
            </DivText>
        );
    }
}