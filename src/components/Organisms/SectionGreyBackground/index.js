import React, { Component } from 'react';
// import Image from 'prop-types';

// import Image from '../../Atoms/Image';
// import LeftRightDescription from '../../Molecules/LeftRightDescription';
import TitleH3 from '../../Atoms/TitleH3';
// import Link from '../../Atoms/Link';
import DivText from '../../Atoms/DivText';
import Section from '../../Molecules/Section';

import './style.css';

export default class SectionGreyBackground extends Component {
    render() {
        return (
            <DivText className="container-section">
                <TitleH3>{this.props.title}</TitleH3>
                <Section>
                    {this.props.children}
                </Section>
            </DivText>
        );
    }
}