import React from 'react';
import './Nav.css';

class Nav extends React.Component{

  render(){
    return(
      <div className="nav">        
        <img
            className="nav_avatar"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
            alt="Profile Logo"
        />
        <h1 className="my_list">
          My List
        </h1>
      </div>
    )
  }
}

export default Nav