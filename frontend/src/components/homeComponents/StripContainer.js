import React from 'react'
import Show from './Show.js'
import './StripContainer.css'

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
    console.table(this.state.shows)

    // let stripsOfPosters = this.state.shows.map((movie) => {
    //   return <img src={movie.poster} alt={movie.title} />
    // })

    return(
      <div className="strip">
          <h2>{this.props.title}</h2>

          <div className="strip_posters">
            {this.state.shows.map((movie) => (
              <img 
              key={movie.id}
              className="strip_poster" 
              src={movie.show.poster} alt={movie.show.title} />
            ))}
          </div>

      </div>
    )
  }
}

export default StripContainer