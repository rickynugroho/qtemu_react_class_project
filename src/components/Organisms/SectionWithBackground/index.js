import React, { Component } from 'react';
// import Image from 'prop-types';

// import Image from '../../Atoms/Image';
// import LeftRightDescription from '../../Molecules/LeftRightDescription';
import TitleH3 from '../../Atoms/TitleH3';
// import Link from '../../Atoms/Link';
import DivText from '../../Atoms/DivText';
import Section from '../../Molecules/Section';

import './style.css';

export default class SectionWithBackground extends Component {
    render() {
        return (
            <DivText className="container-section">
                <div className="container-section-flex">
                    <div>
                        <TitleH3>{this.props.title}</TitleH3>
                    </div>
                    <div>
                        {this.props.rightContent}
                    </div>
                </div>
                
                <Section className={this.props.sectionClassName}>
                    {this.props.children}
                </Section>
            </DivText>
        );
    }
}

SectionWithBackground.defaultProps = {
    sectionClassName: 'grey-section',
    rightContent: '',
}