import React from 'react'
import Banner from './Banner.js'
import StripContainer from './StripContainer.js'
import requests from '../../requests.js'
import { withRouter } from 'react-router-dom';

class Home extends React.Component{


  



  render(){
    return(
      <div className="Home">
        <Banner 
          fetchUrl={requests.fetchMovies}
          createAddToList={this.props.createAddToList}
          list={this.props.list}
        />


        <StripContainer title="TRENDING NOW" fetchUrl={requests.fetchActionAdventure}
        isLargeRow createAddToList={this.props.createAddToList} list={this.props.list}
        />
        <StripContainer title="Adventure Movies" fetchUrl={requests.fetchAdventure} createAddToList={this.props.createAddToList} list={this.props.list}/>
        <StripContainer title="Drama" fetchUrl={requests.fetchDrama} createAddToList={this.props.createAddToList} list={this.props.list}/>
        <StripContainer title="Family" fetchUrl={requests.fetchFamily} createAddToList={this.props.createAddToList} list={this.props.list}/>
        <StripContainer title="Horror" fetchUrl={requests.fetchHorror} createAddToList={this.props.createAddToList} list={this.props.list}/>
        <StripContainer title="Sci-Fi & Fantasy" fetchUrl={requests.fetchSciFiFantasy} createAddToList={this.props.createAddToList} list={this.props.list}/>
      </div>
    )
  }
}

export default withRouter(Home)