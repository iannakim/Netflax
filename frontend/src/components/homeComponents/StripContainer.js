import React from 'react'
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

    return(
      <div className="strip">
          <h2>{this.props.title}</h2>

          <div className="strip_posters">
            {this.state.shows.map((movie) => (
              <img 
              key={movie.id}
              data-toggle="modal"
              data-target="#staticBackdrop"
              className={`strip_poster ${this.props.isLargeRow && "strip_posterLarge"}`} 
              src={this.props.isLargeRow ? movie.show.poster : movie.show.backdrop} alt={movie.show.title} />
            ))}
          </div>
            
            <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    ...
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Understood</button>
                  </div>
                </div>
              </div>
            </div>

      </div>
    )
  }
}

export default StripContainer