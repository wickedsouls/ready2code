// The basics
import React, { Component } from 'react';
import { withRouter } from 'react-router';

// Action creators and helpers

import Header from './layout/Header';
import Social from './layout/Social';
import Routes from './pages/Routes';


class App extends Component {


  render() {
    return (
      <div id="app">
        <Header current={this.props.location.pathname}/>
        <Social/>
        <div id="content">
          <Routes />
        </div>
      </div>
    );
  }
}


export default withRouter(App)
