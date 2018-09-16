import React, { Component } from 'react';
import './style.css';
import DivText from '../../Atoms/DivText';
// import TitleH3 from '../../Atoms/TitleH3';

export default class Section extends Component {
    render() {
        return (
            <DivText className={this.props.className}>
                {this.props.children}
            </DivText>
        )
    }
}

Section.defaultProps = {
    className: 'grey-section',
}
