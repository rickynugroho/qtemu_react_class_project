import React, { Component } from 'react';
// import logo from './logo.svg';
import './normalize.css';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      tanggal: new Date().toString(),
    };
  }

  renderHeader() {
    return (
      <div className="header">
        <div className="header-link">
          <a onClick={() => { this.setState({ 'tanggal': 123 }) }} className="title">QTemu</a>
          <a href="">Create Meetup</a>
          <a href="">Explore</a>
        </div>
        <div>
          <a href="">Login</a>
        </div>
      </div>
    );
  }

  renderActiveMeetup() {
    return (
      <div className="active-meetup grey-section">
        <div className="photo-active-meetup">
          <img src="img/grey.jpg" alt="photo" />
        </div>
        <div className="description-active-meetup">
          <h3>Hacktive8 Meetup</h3>
          <div className="description-active-meetup-content">
            <div className="description-active-meetup-left">
              <div className="left-content">Location</div>
              <div className="right-content">Jakarta, Indonesia</div>
            </div>
            <div className="description-active-meetup-left">
              <div className="left-content">Members</div>
              <div className="right-content">1,078</div>
            </div>
            <div className="description-active-meetup-left">
              <div className="left-content">Organizers</div>
              <div className="right-content">Adhy Wiranata</div>
            </div>
            <div className="description-active-meetup-left">
              <div>
                <a href="" class="btn">Join Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderNextMeetup() {
    return (
      <div className="container-section">
        <h3>Next Meetup</h3>
        <div className="next-meetup grey-section">
          <div className="next-meetup-title">
            Awesome meetup and event
          </div>
          <div className="next-meetup-date">
            {this.state.tanggal}
          </div>
          <div class="next-meetup-p">
            <p>
              <div>Hello, JavaScript & Node.js Ninjas!</div>
              <div>Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018!</div>
              <div>The meetup format will contain some short stories and technical talks.</div>
              <div>If you have short announcement you'd like to share with the audience, you may do so during open mic accouncement.</div>
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
          </div>
        </div>
      </div>
    );
  }

  renderAboutMeetup() {
    return (
      <div className="about-meetup white-section">
        <h3>About Meetup</h3>
        <p>
          Come and meet other developers.
        </p>
        <p>
          Twitter: @JakartaJS.
        </p>
      </div>
    );
  }

  renderMembers() {
    return (
      <div className="container-section">
        <div class="container-section-flex">
          <div>
            <h3>Members</h3>
          </div>
          <div>
            <a href="">See all</a>
          </div>
        </div>
        <div className="member-list grey-section">
          {this.renderMember()}
          {this.renderMemberOther()}
        </div>
      </div>
    );
  }

  renderMember() {
    return (
      <div className="member-section">
        <div className="photo-member">
          <img src="img/grey.jpg" />
        </div>
        <div className="profile-member">
          <div>Organizers</div>
          <div>Adhy Wiranata</div>
        </div>
      </div>
    );
  }

  renderMemberOther() {
    return (
      <div className="member-section">
        <a href="">4 others.</a>
      </div>
    );
  }

  renderPastMeetup() {
    return (
      <div className="past-meetup white-section">
        <div class="container-section-flex">
          <div>
            <h3>Past Meetup</h3>
          </div>
          <div>
            <a href="">See all</a>
          </div>
        </div>
        <div class="past-meetup-list">
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
        <div class="meetup-went-total">
          139 went
        </div>
        <div class="meetup-view-btn">
          <a href="" class="btn-grey">View</a>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        {this.renderActiveMeetup()}
        {this.renderNextMeetup()}
        {this.renderAboutMeetup()}
        {this.renderMembers()}
        {this.renderPastMeetup()}
      </div>
    );
  }
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       message: "my friend (from state)!"
//     };

//     this.updateMessage = this.updateMessage.bind(this);
//   }

//   updateMessage() {
//     this.setState({
//       message: "my friend (from changed state)!"
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to {this.state.message}</h1>
//           <button onClick={this.updateMessage}>Click me!</button>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
