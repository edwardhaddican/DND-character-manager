import React from 'react'
import {connect} from 'react-redux'
import {signUp} from '../store'
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
          <input className="uk-input" name="firstName" type="text" />
        </div>
        <div>
          <label htmlFor="lastname">
            <small>Last Name</small>
          </label>
          <input className="uk-input" name="lastName" type="text" />
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
      const firstName = evt.target.firstName.value
      const lastName = evt.target.lastName.value
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(signUp(email, password, firstName, lastName))
    }
  }
}

export default connect(mapSignup, mapDispatch)(SignUpPage)
