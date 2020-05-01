import React from 'react'
import {connect} from 'react-redux'
import {auth} from '../store'
import Header from './Header'

const SignUpPage = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <Header />

      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="firstname">
            <small>First Name</small>
          </label>
          <input className="uk-input" name="firstname" type="text" />
        </div>
        <div>
          <label htmlFor="lastname">
            <small>Last Name</small>
          </label>
          <input className="uk-input" name="lastname" type="text" />
        </div>
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input className="uk-input" name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input className="uk-input" name="password" type="password" />
        </div>
        <div>
          <button className="uk-button uk-button-primary" type="submit">
            {displayName}
          </button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  )
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export default connect(mapSignup, mapDispatch)(SignUpPage)
