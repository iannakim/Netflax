import React from 'react'
import Banner from './Banner.js'
import StripContainer from './StripContainer.js'
import requests from '../../requests.js'

class Home extends React.Component{

  render(){
    return(
      <div className="Home">
        <Banner fetchUrl={requests.fetchTrendingShows}/>
        <StripContainer title="Action & Adventure" fetchUrl={requests.fetchActionAdventure}/>
        <StripContainer title="Adventure Movies" fetchUrl={requests.fetchAdventure}/>
        <StripContainer title="Drama" fetchUrl={requests.fetchDrama}/>
        <StripContainer title="Family" fetchUrl={requests.fetchFamily}/>
        <StripContainer title="Horror" fetchUrl={requests.fetchHorror}/>
        <StripContainer title="Sci-Fi & Fantasy" fetchUrl={requests.fetchSciFiFantasy}/>
        {/* <StripContainer title="Trending Now" fetchUrl={requests.fetchTrendingShows}/> */}
        {/* <StripContainer title="Popular TV Shows" fetchUrl={requests.fetchTVShows}/> */}
      </div>
    )
  }
}

export default Home