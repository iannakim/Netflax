import React from 'react';
import './Nav.css';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

class Nav extends React.Component{

handleClick = () => {
  this.props.history.push("/")
   window.location.reload(false);
}



  render(){
    return(
      <div className="nav">        
        <img
            className="nav_avatar"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
            alt="Profile Logo"
        />
        <h2 className="current_user">
          Hi, {this.props.currentUser.first_name}
        </h2>
          <Link to="/">
              <h2 onClick={this.handleClick} className="logout">
                Log out
              </h2>
          </Link>

          <Link to="/lists">
              <h2 className="my_list">
                  My List
              </h2>
          </Link>
      </div>
    )
  }
}

export default withRouter(Nav)