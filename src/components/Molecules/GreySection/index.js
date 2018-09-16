import React, { Component } from 'react';
import './style.css';
import DivText from '../../Atoms/DivText';
// import TitleH3 from '../../Atoms/TitleH3';

export default class GreySection extends Component {
    render() {
        return (
            <DivText className="grey-section">
                {this.props.children}
            </DivText>
        )
    }
}

// Image.defaultProps = {
//     className: '',
// }
