import React from 'react'
import Home from './Home.js'
import Nav from './Nav.js'
import { withRouter } from 'react-router-dom';

function HomeContainer(props) {
  return(
    <div className="HomeContainer">
      <Nav
        currentUser={props.currentUser}
      />
      
      <Home
        createAddToList={props.createAddToList}
        list={props.list}
      />

  </div>
  )
}

export default withRouter(HomeContainer)