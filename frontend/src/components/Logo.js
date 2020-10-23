import React from 'react';
import './Logo.css';
import { withRouter } from 'react-router-dom';

class Logo extends React.Component {

  handleClick = () => {
    this.props.history.push("/home")
  }

  render() {
    return(
      <div className="logo">
          <img
            className="logo_img"
            onClick={this.handleClick}
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflax Logo"
          />
      </div>
    )
  }
}

export default withRouter(Logo)