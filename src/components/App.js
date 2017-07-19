import React, { Component } from 'react';
import '../styles/App.css';
// ---  Import Components

import EarthquakeList from './EarthquakeList.js';
import EarthquakeInfo from './EarthquakeInfo.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title"/>

          <div className="my-header">
            Earthquakes
          </div>
          <EarthquakeInfo />
          <EarthquakeList />
        </div>
    );
  }
}

export default App;
