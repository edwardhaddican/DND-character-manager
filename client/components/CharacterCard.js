import React from 'react'

const CharacterCard = props => {
  const { character } = props

  return (
    <div className="characterCard uk-card uk-card-body uk-card-default uk-margin-medium uk-margin-medium-left uk-margin-medium-right ">
      <h3 className="uk-card-title uk-margin-small-bottom">{character.name}</h3>
      <h5 className="uk-margin-small uk-margin-small-left">{character.gameName}</h5>
      <h5 className="uk-margin-small uk-margin-small-left">{character.system}</h5>

      <h5 className="uk-margin-small uk-margin-small-left">Level {character.lvl} {character.class} </h5>
      <img className='avatar' src={character.img}/>
    </ div>
  )
}

export default CharacterCard
