import React, { Component } from 'react';
import Profile from './Profile'
import './App.css';

const USER_DATA = {
  name: 'Marcus Crane',
  username: 'marcus-crane',
  image: 'https://avatars1.githubusercontent.com/u/14816406?v=3&u=d9f92b5bc8c298a4e77b29921e67380531a18b87&s=400'
}

class App extends Component {
  render() {
    return <Profile user={USER_DATA} />
  }
}

export default App;
