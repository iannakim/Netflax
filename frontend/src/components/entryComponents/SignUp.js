import React from 'react'
import './Form.css'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

class SignUp extends React.Component {

  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  }

  handleInputChange = (evt) => {
    this.setState({
      [evt.target.name] : evt.target.value
    })
  }


  handleSubmit = (evt) => {
    evt.preventDefault()
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
          "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password
      })
  })
      .then(res => res.json())
      .then((newUser)=> {
        console.log(newUser)
          this.props.addUserToState(newUser)
          this.props.history.push("/home")
      })
  }

  render(){
    return(
      <div className="form_background">
        <div className="form_page">
          <div className="sign_in">
          <Link to="/signin">
              <button className="sign_in_button">Sign In</button>
          </Link>
          </div>

            <div className="form_container">
              <h1 className="form_title">Unlimited movies, TV shows, and more.</h1>
              <h2 className="form_subtitle">Watch anywhere. Cancel anytime</h2>
              <h3 className="form_tiny">Ready to watch? Enter your email to create or restart your membership.</h3>
              <form className="form" onSubmit={this.handleSubmit}>
                  <p><input type="text"
                      id="f_name"
                      value={this.state.first_name}
                      onChange={this.handleInputChange}
                      name="first_name"
                      placeholder="first name"
                  /></p>
                  <p><input type="text"
                      id="l_name"
                      value={this.state.last_name}
                      onChange={this.handleInputChange}
                      name="last_name"
                      placeholder="last name"
                  /></p>
                  <p><input type="text"
                      id="email"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                      name="email"
                      placeholder="email address"
                  /></p>
                  <p><input type="text"
                      id="password"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                      name="password"
                      placeholder="password (must be between 5-10 characters and numbers)"
                  /></p>
                  <input type="submit" value="GET STARTED >" />
              </form>
          </div>
        </div>
      </div>
    )
  }
}


export default withRouter(SignUp)