import React from 'react'
import './Form.css'
import { withRouter } from 'react-router-dom';

class SignIn extends React.Component {

  state = {
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

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {"content-type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then((user)=> {
        if(user.id) {
          this.props.addUserToState(user)
          this.props.findList(user)
          this.props.history.push("/home")
        }
        else {
          alert("INVALID EMAIL OR PASSWORD. PLEASE TRY AGAIN.")
      }
      })
      evt.target.reset()
}

  

  render(){
    return(
      <div className="form_background">
        <div className="form_page">
            <div className="form_container">
              <h1 className="form_title">Sign In</h1>
              <form className="form" onSubmit={this.handleSubmit}>
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
                      placeholder="password"
                  /></p>
                  <input type="submit" value="Sign In" />
              </form>
          </div>
        </div>
      </div>
    )
  }
}


export default withRouter(SignIn)