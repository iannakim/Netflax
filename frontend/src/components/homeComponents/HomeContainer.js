import React from 'react'
import Home from './Home.js'
import Nav from './Nav.js'

function HomeContainer(props) {
  return(
    <div className="HomeContainer">
    <Nav currentUser={props.currentUser}/>
    <Home />
    {/* <ListContainer /> */}
  </div>
  )
}

export default HomeContainer