import React, { Component } from 'react';
import LoadingOverlay from './LoadingOverlay'
import AppBar from './AppBar'
import '../styles/Main.global.css';

class Main extends Component {

  render() {
    return (
      <div className="main dark-theme">
        <AppBar client={this.props.client} profiles={this.props.profiles} />
        <LoadingOverlay {...this.props} />
        <div className="main-container container">
          {React.cloneElement(this.props.children, this.props)}
        </div>
      </div>
    )
  }
}

export default Main
