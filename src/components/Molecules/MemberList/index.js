import React, { Component } from 'react';
import DivText from '../../Atoms/DivText';
import Image from '../../Atoms/Image';

export default class MemberList extends Component {
    renderMemberList() {
        return this.props.memberOrganizer.map((member, index) => {
            console.log(member);
            
            return (
                <DivText className="member-section" key={index}>
                    <DivText className="photo-member">
                        <Image src={member.picture.large} alt="member-pic" />
                    </DivText>
                    <DivText className="profile-member">
                        <DivText>{member.name.first}</DivText>
                        <DivText className="wrap-text">{member.email}</DivText>
                    </DivText>
                </DivText>
            );
        })
    }

    render() {
        return (
            <DivText>
                {this.renderMemberList()}
            </DivText>
        )
    }
}
