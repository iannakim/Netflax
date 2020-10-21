import React from 'react'
import Show from './Show.js'
import './StripContainer.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

class StripContainer extends React.Component {

state = {
  shows: [],
  opts: {
    height: "390",
    width: "100%",
    playerVars: {
      // "https://developers/google/com.youtube/player_parameters"
      autoplay: 1,
    }
  },
  trailerUrl: "", 
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

  // handleClick = (movie) => {
  //   if (trailerUrl) {
  //   setTrailerUrl('');
  //   } else {
  //     movieTrailer(movie?.title || "")
  //     .then(url => {
  //       // https://www.youtube.com/watch?v=KK8FHdFluOQ
  //       const urlParams = new URLSearchParams(new URL(url).search);
  //       setTrailerUrl(urlParams.get("v"));


  //     })
  //     .catch((error) => console.log(error))
  //   }
  // }


  render(){

    return(
      <div className="strip">
          <h2>{this.props.title}</h2>

          <div className="strip_posters">
            {this.state.shows.map((movie) => (
              <img 
              key={movie.id}
              // onClick={()=>this.handleClick(movie)}
              className={`strip_poster ${this.props.isLargeRow && "strip_posterLarge"}`} 
              src={this.props.isLargeRow ? movie.show.poster : movie.show.backdrop} alt={movie.show.title} />
            ))}
          </div>

          {this.state.trailerUrl && <YouTube videoId={this.state.trailerUrl} opts={this.state.opts} />}

      </div>
    )
  }
}

export default StripContainer