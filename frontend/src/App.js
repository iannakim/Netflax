import React from 'react';
import './App.css';
import Logo from './components/Logo.js';
import NotFound from './NotFound.js'
import SignUp from './components/entryComponents/SignUp.js';
import SignIn from './components/entryComponents/SignIn.js';
import HomeContainer from './components/homeComponents/HomeContainer.js';
import { Route, Switch, Link } from 'react-router-dom'

class App extends React.Component {

  state = {
    currentUser: [],
    isUserLoggedIn: false
  }

  addUserToState = (infoFromChild) => {
    this.setState({
      currentUser: infoFromChild,
      isUserLoggedIn: true

    })
  }





  render() {
    return (
        <div className="App">

          <Logo />
          {/* { this.state.isUserLoggedIn
          ?
          <HomeContainer currentUser={this.state.currentUser}/>
           :
          <SignUp addUserToState={this.addUserToState}/>
          } */}
          <main>

            <Switch>
              <Route path="/" exact component={SignUp} />
              <Route path="/login" exact component={SignIn} />
              <Route path="/characters/:id" render={this.renderSpecificCharacter}/>
              <Route component={NotFound} />
            </Switch>

          </main>

        </div>
    )
  }
}

export default App;
