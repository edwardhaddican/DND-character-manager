import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CharacterCard from './CharacterCard'

/**
 * COMPONENT
 */
export const UserHome = props => {
  return (

    <div>
      <CharacterCard character={{
        name: 'Akroc',
        gameName: 'Dwarven Game',
        system: "DND 5th Edit",
        img: '/defaultCharacterImg.jpg',
        lvl: 5,
        class: "Paladin"
      }} />

      <CharacterCard character={{
        name: 'Grumble',
        gameName: 'Ork Game',
        system: "W and G",
        img: 'https://wh40k.lexicanum.com/mediawiki/images/thumb/a/ab/Bigmek-tellyportblasta.png/350px-Bigmek-tellyportblasta.png',
        lvl: 3,
        class: "Mech"
      }} />

    </div>

  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
