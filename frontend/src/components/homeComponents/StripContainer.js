import React from 'react'
import Show from './Show.js'

class StripContainer extends React.Component {

state = {
  shows: "",
}
  componentDidMount(){
    fetch(this.props.fetchUrl)
      .then(res => res.json())
      .then((workable_hash) => {
        let show_hash = workable_hash["show_genres"]
        this.setState({
          shows: show_hash
        })
      })
  }


  render(){
    console.table(this.state.shows)
    return(
      <div className="strip-container">
          <h2>{this.props.title}</h2>

          <div className="row_posters">
            {this.state.shows.map(movie => (
              <img src={movie.poster} alt={movie.title} />
            ))}
          </div>

      </div>
    )
  }
}

export default StripContainer