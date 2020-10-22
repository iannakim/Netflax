import React from 'react';
import './App.css';
import Logo from './components/Logo.js';
import NotFound from './NotFound.js'
import SignUp from './components/entryComponents/SignUp.js';
import SignIn from './components/entryComponents/SignIn.js';
import HomeContainer from './components/homeComponents/HomeContainer.js';
import { withRouter } from 'react-router-dom';
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
                  // history={this.props.history} 
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

  handleLogIn = (InfoFromChild) => {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {"content-type": "application/json" },
      body: JSON.stringify(InfoFromChild)
    })
      .then(res => res.json())
      .then((user)=> {
        console.log("this is props", this.props);
        console.log(user);
        if(user.id) {
          this.addUserToState(user)
          this.props.history.push("/home")
        }
        else {
          alert("INVALID EMAIL OR PASSWORD. PLEASE TRY AGAIN.")
      }
      })
  }


  render() {
    console.log(this.props.history)
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
              <Route path="/" exact render={ this.renderSignUp } />
              <Route path="/login" render={ this.renderSignIn } />
              <Route path="/home" render={ this.renderHome } />
              <Route component={NotFound} />
            </Switch>

          </main>

        </div>
    )
  }
}

export default withRouter(App);
