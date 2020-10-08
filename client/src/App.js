import React from 'react';
import MapView from './components/MapView';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          Welcome to the app.
        </header>
        <MapView/>
      </div>
    );
  }
}

export default App;
