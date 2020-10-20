import React from 'react';
import './App.css';
import Logo from './components/Logo.js'
import EntryContainer from './components/EntryContainer.js'
import Home from './components/Home.js'


class App extends React.Component {

  render() {
    return (
        <div className="App">
          <Logo />
          <EntryContainer />
          <Home />
        </div>
    )
  }
}

export default App;
