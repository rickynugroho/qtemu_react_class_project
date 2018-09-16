import React, { Component } from 'react';
// import Image from 'prop-types';

// import Image from '../../Atoms/Image';
// import LeftRightDescription from '../../Molecules/LeftRightDescription';
import TitleH3 from '../../Atoms/TitleH3';
// import Link from '../../Atoms/Link';
import DivText from '../../Atoms/DivText';
import GreySection from '../../Molecules/GreySection';

import './style.css';

export default class SectionGreyBackground extends Component {
    render() {
        return (
            <DivText className="container-section">
                <TitleH3>{this.props.title}</TitleH3>
                <GreySection>
                    {this.props.children}
                </GreySection>
            </DivText>
        );
    }
}