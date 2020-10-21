import React from 'react'
import Banner from './Banner.js'
import StripContainer from './StripContainer.js'


class Home extends React.Component{

  render(){
    return(
      <div className="Home">
        <Banner />
        <StripContainer title="NETFLIX ORIGINALS" fetchUrl={this.props.fetchUrl}/>
        <StripContainer title="Trending Now" fetchUrl={this.props.fetchUrl}/>
      </div>
    )
  }
}

export default Home