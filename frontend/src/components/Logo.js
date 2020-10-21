import React from 'react';
import './Logo.css';

class Logo extends React.Component {
  render() {
    return(
      <div className="logo">
          <img
            className="logo_img"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflax Logo"
          />
      </div>
    )
  }
}

export default Logo