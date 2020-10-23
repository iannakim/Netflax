import React from "react";
import './Content.css'

function Content(props) {
  return(
    <div className="modal">
      <a className="close" onClick={props.close}>
        &times;
      </a>

        <div className="modal_content">
          <div className="poster">
              <img className="poster" src={props.movie.show.poster} />
          </div>

          <div className="content">

              <div className="header">
                {props.movie.show.title}
              </div>

              <div className="genre">
                {props.movie.genre.name} {props.movie.show.average_rating} out of 10
              </div>
              
              <div className="button">
                <button className="modal_button">Play</button>
                <button className="modal_button" onClick={() => {props.createAddToList(props.movie.show.id, props.list.id)}}>Add to List</button>
              </div>

              <div className="overview">
                {props.movie.show.overview}
              </div>

              <div className="release">
                Release date: {props.movie.show.release_date}
              </div>

          </div>  

        </div>
    </div>
  )
}

export default Content
