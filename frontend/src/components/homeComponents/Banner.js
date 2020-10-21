import React from 'react'
import Show from './Show.js'

class Banner extends React.Component{

  render(){
    return (
<div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <center>
        <img src="https://sc-events.s3.amazonaws.com/4178068/main.jpg" className="d-block w-100" alt="..."/>
      </center>
    </div>
    <div className="carousel-item">
      <center>
        <img src="https://vignette.wikia.nocookie.net/transcripts/images/9/97/Disney_and_Pixar%27s_Up_-_iTunes_Movie_Poster.jpg/revision/latest?cb=20170206002656" className="d-block w-100" alt="..."/>
      </center>
    </div>
    <div className="carousel-item">
      <center>
        <img src="https://fanart.tv/fanart/movies/12133/movieposter/step-brothers-530cd05fd70f2.jpg" className="d-block w-100" alt="..." />
      </center>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

    
    )
  }
}

export default Banner