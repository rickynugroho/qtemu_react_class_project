import React, { Component } from 'react';
import DivText from '../../Atoms/DivText';
import Image from '../../Atoms/Image';

export default class MemberList extends Component {
    constructor() {
        super();

        this.state = {
            memberOrganizer: [],
        };
    }

    shouldComponentUpdate (nextProps, nextState) {
        console.log(nextProps);
        if(this.state.memberOrganizer !== nextProps.memberOrganizer){
            this.setState({
                memberOrganizer: nextProps.memberOrganizer,
            });

            return true;
        }
        return false;
    }

    renderMemberList() {
        console.log(this.state.memberOrganizer.length);
        if (this.state.memberOrganizer.length <= 0) {
            return (
                <DivText>
                    <Image src="img/ajax-loader.gif" />
                </DivText>
            );
        } else {
            return this.state.memberOrganizer.map((member, index) => {
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
    }

    render() {
        return (
            <DivText>
                {this.renderMemberList()}
            </DivText>
        )
    }
}
