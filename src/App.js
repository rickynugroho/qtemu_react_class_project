import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  renderHeader() {
    return (
      <div className="header">
        <div className="header-link">
          <a href="" className="title">QTemu</a>
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
      <div className="active-meetup">
        asdf
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        {this.renderActiveMeetup()}
        <h1>Halo, Hacktiv8!</h1>
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
