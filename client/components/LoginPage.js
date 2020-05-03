import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {login} from '../store'
import Header from './Header'
import {Link} from 'react-router-dom'

const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <Header />
      <form className="uk-flex uk-flex-column uk-width-2-3 uk-margin-auto" onSubmit={handleSubmit} name={name}>
        <div className='uk-margin-small-left'>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input className='uk-input' name="email" type="text" />
        </div>
        <div className='uk-margin-small-left'>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input className='uk-input' name="password" type="password" />
        </div>
        <div className='uk-margin-small-left'>
          <button className="uk-button uk-button-primary" type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <div className="uk-flex uk-flex-column uk-width-2-3 uk-margin-auto">
      <Link className='uk-margin-small-left' to="/signup"> Sign Up</Link>
      <a className='uk-margin-small-left' href="/auth/google">{displayName} with Google</a>
      </div>

    </div>
  )
}

const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(login(email, password))
    }
  }
}

export default connect(mapLogin, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
