import React from 'react'
import Popup from "reactjs-popup";
import Content from "./Content.js";
import './StripContainer.css'
import { withRouter } from 'react-router-dom';

class StripContainer extends React.Component {

state = {
  shows: [],
}


  componentDidMount(){
    fetch(this.props.fetchUrl)
      .then(res => res.json())
      .then((workable_hash) => {
        let showArray = workable_hash["show_genres"]
        this.setState({
          shows: showArray
        })
      })
  }


  render(){

    return(
      <div className="strip">
          <h2>{this.props.title}</h2>

          <div className="strip_posters">
            {this.state.shows.map((movie) => (
              <Popup modal trigger={<img 
                key={movie.id}
                className={`strip_poster ${this.props.isLargeRow && "strip_posterLarge"}`} 
                src={this.props.isLargeRow ? movie.show.poster : movie.show.backdrop} alt={movie.show.title} />}>
              {close => <Content movie={movie} close={close} createAddToList={this.props.createAddToList} list={this.props.list}/>}
              </Popup>
              
            ))}
          </div>
          
          
      </div>
    )
  }
}

export default withRouter(StripContainer)