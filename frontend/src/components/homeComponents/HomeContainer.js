import React from 'react'
import Home from './Home.js'
import Nav from '../Nav.js'
import ListContainer from '../ListContainer.js'
import requests from './src/requests.js'

function HomeContainer(){
  return(
    <div className="HomeContainer">
    <Nav />
    <Home fetchUrl={requests.fetchTrendingShows} />
    <ListContainer />
  </div>
  )
}

export default HomeContainer