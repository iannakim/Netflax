import React from 'react'
import BannerContainer from './BannerContainer.js'
import StripContainer from './StripContainer.js'
import Nav from './Nav.js'

class Home extends React.Component{

  render(){
    return(
      <div className="Home">
        {/* <Nav /> */}
        <BannerContainer />
        <StripContainer />
      </div>
    )
  }
}

export default Home