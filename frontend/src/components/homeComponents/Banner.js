import React from 'react'
import Show from './Show.js'
import './Banner.css'

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

    truncate = (str, n) => {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }


  render(){
    return (
      <header className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${this.state.shows.backdrop})`,
          backgroundPosition: "center center",
        }}
      >
          <div className="banner_contents">
            <h1 className="banner_title">{this.state.shows.title}</h1>

              <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
              </div>

              <h1 className="banner_overview">
                {this.truncate(this.state.shows.overview, 160)}
              </h1>

          </div>

        <div className="banner_fadeBottom" />
      </header>
    )
  }
}

export default Banner
