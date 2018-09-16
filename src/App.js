import React, { Component } from 'react';

import Header from './components/Organisms/Header';
import ActiveMeetup from './components/Organisms/ActiveMeetup';
import SectionWithBackground from './components/Organisms/SectionWithBackground';
import DivText from './components/Atoms/DivText';
import Link from './components/Atoms/Link';
import Image from './components/Atoms/Image';

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
        memberOrganizer: 'Twinky, Winky, Dipsy, Lala, Poh',
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

    // this.state = {
    //   tanggal: new Date().toString(),
    //   peoples: [
    //       {
    //         name: 'Obi Wan',
    //         status: 'Jedi'
    //       },
    //       {
    //         name: 'Luke Skywalker',
    //         status: 'Padawan'
    //       }
    //     ]
    // };
  }

  // renderMembers() {
  //   return (
  //     <div className="container-section">
  //       <div className="container-section-flex">
  //         <div>
  //           <h3>Members</h3>
  //         </div>
  //         <div>
  //           <a href="">See all</a>
  //         </div>
  //       </div>
  //       <div className="member-list grey-section">
  //         {this.renderMember()}
  //         {this.renderMemberOther()}
  //       </div>
  //     </div>
  //   );
  // }

  // renderMember() {
  //   return (
  //     <div className="member-section">
  //       <div className="photo-member">
  //         <img src="img/grey.jpg" alt="member-pic" />
  //       </div>
  //       <div className="profile-member">
  //         <div>Organizers</div>
  //         <div>Adhy Wiranata</div>
  //       </div>
  //     </div>
  //   );
  // }

  // renderMemberOther() {
  //   return (
  //     <div className="member-section">
  //       <a href="">4 others.</a>
  //     </div>
  //   );
  // }

  renderPastMeetup() {
    return (
      <div className="past-meetup white-section">
        <div className="container-section-flex">
          <div>
            <h3>Past Meetup</h3>
          </div>
          <div>
            <a href="">See all</a>
          </div>
        </div>
        <div className="past-meetup-list">
          {this.renderMeetupEvent()}
          {this.renderMeetupEvent()}
          {this.renderMeetupEvent()}
        </div>
      </div>
    );
  }

  renderMeetupEvent() {
    return (
      <div className="meetup-box">
        27 November 2017
        <hr />
        #39 JakartaJS Meetup
        <div className="meetup-went-total">
          139 went
        </div>
        <div className="meetup-view-btn">
          <a href="" className="btn-grey">View</a>
        </div>
      </div>
    );
  }

  render() {
    return (
      <DivText>
        <Header />
        <ActiveMeetup infoMeetup={this.state.info} />

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
          <DivText className="member-section">
            <DivText className="photo-member">
              <Image src="img/grey.jpg" alt="member-pic" />
            </DivText>
            <DivText className="profile-member">
              <DivText>Organizers</DivText>
              <DivText>Adhy Wiranata</DivText>
            </DivText>
          </DivText>
          
          <DivText className="member-section">
            <a href="">4 others.</a>
          </DivText>
        </SectionWithBackground>

        {/* {this.renderAboutMeetup()} */}
        {/* {this.renderMembers()} */}
        {this.renderPastMeetup()}
        {/* <ListPeople people={this.state.peoples} /> */}
      </DivText>
    );
  }
}

// export class ListPeople extends Component {
//   // constructor(props) {
//   //   // hanya diperlukan ketika props mau digunakan di dalam constructor
//   //   super(props);
//   // }

//   renderChild() {
//     return this.props.people.map((data, index) => {
//       return (
//         <div key={index}>
//           {data.name}
//         </div>
//       )
//     });
//   }

//   render() {
//     return this.renderChild();
//   }
// }

export default App;
