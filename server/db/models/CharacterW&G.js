const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/stackathon2020')

const CharacterWG = db.define('characterWG', {
  character_name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  character_species: {
    type: Sequelize.ENUM([
      'Human',
      'Ork',
      'Eldar',
      'Space Marine',
      'Primaris Marine'
    ]),
    allowNull: false
  },

  tier: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    allowNull: false,
    validate: {
      min: 1,
      max: 5
    }
  },

  attribute_strength: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1
    }
  },

  attribute_agility: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1
    }
  },

  attribute_toughness: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1
    }
  },

  attribute_intellect: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1
    }
  },

  attribute_willpower: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1
    }
  },

  attribute_fellowship: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1
    }
  },

  attribute_initiative: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1
    }
  },

  skill_athletics: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  skill_awareness: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  skill_ballistic_skill: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  skill_cunning: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  skill_deception: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  skill_insight: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  skill_intimidation: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  skill_investigation: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  skill_leadership: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  skill_medicae: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  skill_persuasion: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  skill_pilot: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  skill_psychic_mastery: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  skill_scholar: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  skill_stealth: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  skill_survival: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  skill_tech: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  skill_weapon_skill: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  armor: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = CharacterWG
