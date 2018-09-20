import React, { Component } from 'react';

import Header from './components/Organisms/Header';
import ActiveMeetup from './components/Organisms/ActiveMeetup';
import SectionWithBackground from './components/Organisms/SectionWithBackground';
// import Section from './components/Molecules/Section';
import DivText from './components/Atoms/DivText';
import Link from './components/Atoms/Link';
// import Image from './components/Atoms/Image';
import Hr from './components/Atoms/Hr';
import MemberList from './components/Molecules/MemberList';

import axios from 'axios';

// import logo from './logo.svg';
import './normalize.css';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      tanggal: new Date().toString(),
      info: {
        meetupName: 'React Meetup',
        location: 'Jakarta, Indonesia',
        numberOfMembers: '796',
        headOrganizer: 'Hacktiv8',
        memberOrganizer: [],
      },
      twitter: '@ReactMeetup',
      hashTag: '#reactmeetup',
      meetups: [
        {
          id: 39,
          date: '1 November 2017',
          topic: 'React Meetup with kumparan',
          participants: '54'
        },
        {
          id: 40,
          date: '15 September 2017',
          topic: 'React Meetup with bibli',
          participants: '65'
        },
        {
          id: 41,
          date: '7 October 2017',
          topic: 'React Meetup with Hacktiv8',
          participants: '81'
        }
      ]
    };
  }

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=15")
      .then(response => {
        let temporaryState = this.state;
        temporaryState.info.memberOrganizer = response.data.results;
        this.setState(temporaryState);
      });
  }

  render() {
    return (
      <DivText>
        <Header addClassOnClick='bg-red' />
        <ActiveMeetup infoMeetup={this.state.info} />

        {/* TODO: Cara define organism yg benar seperti ActiveMeetup atau SectionWithBackground (dimana komponen dibawahnya masuk sebagai children)? */}
        {/* TODO: Cara menggunakan templates dalam atomic design? */}
        {/* TODO: Cara membuat atom yg lebih benar? Button (use children) atau Link (use props text)? */}
        {/* TODO: Molecules saya hanya berisi DIV, konsep ini benar? Atau harusnya dihandle di Organism? */}

        <SectionWithBackground date={this.state.tanggal} title="Next Meetup">
          <DivText className="next-meetup-title">
            Awesome meetup and event
            </DivText>
          <DivText className="next-meetup-date">
            {this.state.tanggal}
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
        </SectionWithBackground>

        <SectionWithBackground title="About Meetup" sectionClassName="white-section">
          <DivText>
            <p>
              Come and meet other developers.
              </p>
            <p>
              Twitter: {this.state.twitter}.
              </p>
          </DivText>
        </SectionWithBackground>

        <SectionWithBackground title="Members" sectionClassName="member-list grey-section" rightContent={<Link text="See all" className="section-right-content" />}>
          <MemberList memberOrganizer={this.state.info.memberOrganizer} />
          {/* <DivText className="member-section">
            <a href="">4 others.</a>
          </DivText> */}
        </SectionWithBackground>

        <SectionWithBackground title="Past Meetup" sectionClassName="white-section" rightContent={<Link text="See all" className="section-right-content" />}>
          <DivText className="past-meetup-list">
            {this.state.meetups.map((meetup, index) => {
              return (
                <DivText key={index} className="meetup-box">
                  <DivText>{meetup.date}</DivText>
                  <Hr />
                  <DivText>{meetup.topic}</DivText>
                  <DivText className="meetup-went-total">
                    <DivText>{meetup.participants} went</DivText>
                  </DivText>
                  <DivText className="meetup-view-btn">
                    <Link className="btn-grey" text="View" />
                  </DivText>
                </DivText>
              );
            })}
          </DivText>
        </SectionWithBackground>

        <Hr className="hr-footer" />
        <DivText className="copyright">Copyright ReactMeetup 2018</DivText>

      </DivText>
    );
  }
}

export default App;
