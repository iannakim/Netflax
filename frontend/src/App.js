import React from 'react';
import './App.css';
import Logo from './components/Logo.js';
import NotFound from './NotFound.js'
import SignUp from './components/entryComponents/SignUp.js';
import SignIn from './components/entryComponents/SignIn.js';
import HomeContainer from './components/homeComponents/HomeContainer.js';
import ListContainer from './listComponents/ListContainer.js'

import { Route, Switch } from 'react-router'

class App extends React.Component {

  state = {
    currentUser: null,
    isUserLoggedIn: false,
    list: {"id": null}
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
                  createList={this.createList}
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
                  findList={this.findList}
                />
             </div> 
    }
  }

  renderHome = (routerProps) => {
    if(this.state.isUserLoggedIn){
      return <div>
                <HomeContainer 
                  currentUser={this.state.currentUser}
                  createAddToList={this.createAddToList}
                  list={this.state.list}
                />
             </div> 
    }
  }


  createList = (user) => {
    fetch("http://localhost:3000/list", {
      method: "POST",
      headers: {
          "Content-Type": "Application/json"
      },
      body: JSON.stringify({
          name: "My List",
          user_id: user.id
      })
  })
      .then(res => res.json())
      .then((newList)=> {
        console.log(newList)
        this.addListToState(newList)
      })
  }

  addListToState = (newlist) => {
    this.setState({
      list: newlist
    })
  }

  findList = (user) => {
    fetch("http://localhost:3000/findlist", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({
          user_id: user.id
      })
  })
     .then(res => res.json())
     .then((foundList) => {
         if(foundList.id){
          this.addListToState(foundList)
          console.log("foundlist", foundList)
         } 
      })
  }


  renderLists = (routerProps) => {
    if(this.state.isUserLoggedIn){
      return <div>
                <ListContainer
                    list={this.state.list} 
                    // deleteFromList={this.deleteFromList}
                />
             </div> 
    }
  }

  deleteFromList = (listItemIdFromChild) => {
    fetch("http://localhost:3000/deleteItem", {
      method: "DELETE",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({
          id: listItemIdFromChild
      })
    })
  }

  createAddToList = (show, list) => {
    console.log("createAddToList", show, list)
    fetch("http://localhost:3000/addtolist", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({
          list_id: list,
          show_id: show
      })
  })
     .then(res => res.json())
     .then((newlyAddedListItem) => {
      })
  }






  render() {
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
