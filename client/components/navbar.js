import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div className="uk-width-1-1">
    <nav className="uk-flex uk-flex-between uk-width-1-1">
      {isLoggedIn ? (
        <div>
          <Link to="/home">Home</Link>
          <div className="data-uk-inline">
            <a href="">Create Character</a>
            <div data-uk-dropdown="mode: click; pos: top-right">
              <Link to="/">Create Character</Link>
              <a href="#" onClick={handleClick}>
                Logout
          </a>
            </div>
          </div>
          <div className="data-uk-inline">
            <a href="">My Games</a>
            <div data-uk-dropdown="mode: click; pos: top-right">
              <Link to="/">My Games</Link>
            </div>

            <a href="#" onClick={handleClick}>
              Logout
          </a>
          </div>

        </div>



      ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/">Create Character: DND 5th edition</Link>
            <Link to="/">Create Character: Wrath and Glory</Link>
            <Link to="/">My Characters</Link>
            <Link to="/">My Games</Link>
          </div>
        )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
