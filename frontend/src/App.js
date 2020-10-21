import React from 'react';
import './App.css';
import Logo from './components/Logo.js';
import EntryContainer from './components/entryComponents/EntryContainer.js';
import HomeContainer from './components/homeComponents/HomeContainer.js';


class App extends React.Component {

  render() {
    return (
        <div className="App">
          <Logo />
          <EntryContainer />
          <HomeContainer />
        </div>
    )
  }
}

export default App;
