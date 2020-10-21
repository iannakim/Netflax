import React from 'react'
import Banner from './Banner.js'
import StripContainer from './StripContainer.js'
import requests from '../../requests.js'

class Home extends React.Component{

  render(){
    return(
      <div className="Home">
        <Banner fetchUrl={requests.fetchTrendingShows}/>
        <StripContainer title="Adventure Movies" fetchUrl={requests.fetchAdventure}/>
        <StripContainer title="Sci-Fi Fantasy" fetchUrl={requests.fetchSciFiFantasy}/>
        <StripContainer title="Action" fetchUrl={requests.fetchAction}/>
        {/* <StripContainer title="Trending Now" fetchUrl={requests.fetchTrendingShows}/> */}
        {/* <StripContainer title="Popular TV Shows" fetchUrl={requests.fetchTVShows}/> */}
      </div>
    )
  }
}

export default Home