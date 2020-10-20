import React from 'react'

class BannerContainer extends React.Component{

  render(){
    return (
<div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <center>
        <img src="https://sc-events.s3.amazonaws.com/4178068/main.jpg" class="d-block w-100" alt="..."/>
      </center>
    </div>
    <div class="carousel-item">
      <center>
        <img src="https://vignette.wikia.nocookie.net/transcripts/images/9/97/Disney_and_Pixar%27s_Up_-_iTunes_Movie_Poster.jpg/revision/latest?cb=20170206002656" class="d-block w-100" alt="..."/>
      </center>
    </div>
    <div class="carousel-item">
      <center>
        <img src="https://fanart.tv/fanart/movies/12133/movieposter/step-brothers-530cd05fd70f2.jpg" class="d-block w-100" alt="..." />
      </center>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

    
    )
  }
}

export default BannerContainer