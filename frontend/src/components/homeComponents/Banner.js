import React from 'react'
import Show from './Show.js'

class Banner extends React.Component {

  state = {
    shows: []
  }
    componentDidMount(){
      fetch(this.props.fetchUrl)
        .then(res => res.json())
        .then((workable_hash) => {
          let showArray = workable_hash["shows"]
          let randomNum = Math.floor(Math.random() * showArray.length - 1)
          this.setState({
            shows: showArray[randomNum]
          })
        })
    }

  render(){
    return (
      <header className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(
            {this.state.shows.backdrop}
            )`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_contents">
          <h1>{this.state.shows.title}</h1>
        </div>
      </header>
    )
  }
}

export default Banner
