import React from 'react';
import './App.css';
import Logo from './components/Logo.js';
import NotFound from './NotFound.js'
import SignUp from './components/entryComponents/SignUp.js';
import SignIn from './components/entryComponents/SignIn.js';
import HomeContainer from './components/homeComponents/HomeContainer.js';
import ListContainer from './components/listComponents/ListContainer.js'
import { Route, Switch } from 'react-router'

class App extends React.Component {

  state = {
    currentUser: null,
    isUserLoggedIn: false
  }

  addUserToState = (infoFromChild) => {
    this.setState({
      currentUser: infoFromChild,
      isUserLoggedIn: true
    })
  }

  renderSignUp = (routerProps) => {
    if(!this.state.isUserLoggedIn){
      return <div>
                <SignUp
                  addUserToState={this.addUserToState}
                />
             </div> 
    }
  }

  renderSignIn = (routerProps) => {
    if(!this.state.isUserLoggedIn){
      return <div>
                <SignIn
                  addUserToState={this.addUserToState}
                  handleLogIn={this.handleLogIn} 
                />
             </div> 
    }
  }

  renderHome = (routerProps) => {
    if(this.state.isUserLoggedIn){
      return <div>
                <HomeContainer currentUser={this.state.currentUser}/>
             </div> 
    }
  }

  renderLists = () => {

  }


  render() {
    console.log(this.props.history)
    return (
        <div className="App">
          <Logo />

            <main>

              <Switch>
                <Route path="/" exact render={ this.renderSignUp } />
                <Route path="/signin" render={ this.renderSignIn } />
                <Route path="/home" render={ this.renderHome } />
                <Route path="/lists" render={ this.renderLists } />
                <Route component={NotFound} />
              </Switch>

            </main>

        </div>
    )
  }
}

export default App;
