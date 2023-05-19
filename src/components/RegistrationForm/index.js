import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    username: '',
    password: '',
    paras1: '',
    paras2: '',
    first: true,
    second: true,
    clicked: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
    this.setState({first: true})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
    this.setState({second: true})
  }

  eventHandler1 = () => {
    const {username, password, paras1, paras2, first} = this.state
    if (username === '') {
      this.setState({first: false})
    } else {
      this.setState({first: true})
    }
  }

  eventHandler2 = () => {
    const {username, password, paras1, paras2, second} = this.state
    if (password === '') {
      this.setState({second: false})
    } else {
      this.setState({second: true})
    }
  }

  onGetSucess = () => {
    this.setState({clicked: true})
    this.setState({password: ''})
    this.setState({username: ''})
  }

  submitForm = event => {
    event.preventDefault()
    const {username, password, paras1, paras2} = this.state

    if (username !== '' && password !== '') {
      this.onGetSucess()
    } else if (username === '' && password === '') {
      this.setState({first: false})
      this.setState({second: false})
    } else if (username === '' && password !== '') {
      this.setState({first: false})
      this.setState({second: true})
    } else if (username !== '' && password === '') {
      this.setState({second: false})
      this.setState({first: true})
    }
  }

  clickit = () => {
    this.setState({clicked: false})
  }

  tales = () => {
    const {username, password, paras, clicked, first, second} = this.state

    return (
      <>
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
        />
        <p>Submitted Successfully</p>
        <button onClick={this.clickit}>Submit another Response</button>
      </>
    )
  }

  acess = () => {
    const {username, password, paras1, paras2, first} = this.state
    if (first === false) {
      return 'required'
    }
    return ''
  }

  acess2 = () => {
    const {username, password, paras1, paras2, first, second} = this.state
    if (second === false) {
      return 'required'
    }
    return ''
  }

  render() {
    const {
      username,
      password,
      paras1,
      paras2,
      clicked,
      first,
      second,
    } = this.state
    console.log(paras1)
    console.log(first)
    console.log(second)
    return (
      <div className="bg-container">
        <div className="card">
          <h1>Registration</h1>
          {clicked ? (
            this.tales()
          ) : (
            <form onSubmit={this.submitForm}>
              <div>
                <label htmlFor="username">FIRST NAME</label>
                <br />
                <input
                  type="text"
                  id="username"
                  value={username}
                  onBlur={this.eventHandler1}
                  onChange={this.onChangeUsername}
                />
                <p>{this.acess()}</p>
              </div>

              <div>
                <label htmlFor="password">LAST NAME</label>
                <br />
                <input
                  type="text"
                  id="password"
                  value={password}
                  onBlur={this.eventHandler2}
                  onChange={this.onChangePassword}
                />
                <p>{this.acess2()}</p>
              </div>
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
