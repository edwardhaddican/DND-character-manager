const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/stackathon2020')

const Character5thEdit = db.define('character5thEdit', {
  character_name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  character_species: {
    type: Sequelize.ENUM(['Human', 'Elf', 'Dwarf']),
    allowNull: false
  },

  character_level: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    allowNull: false,
    validate: {
      min: 1,
      max: 20
    }
  },

  attribute_strength: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1
    }
  },

  attribute_dexterity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1
    }
  },

  attribute_constitution: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1
    }
  },

  attribute_intelligence: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1
    }
  },

  attribute_wisdom: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1
    }
  },

  attribute_charisma: {
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

  saving_throw_strength: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },

  saving_throw_dexterity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  saving_throw_constitution: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },

  saving_throw_intelligence: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },

  saving_throw_wisdom: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },

  saving_throw_charisma: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },

  skill_acrobatics: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  skill_animal_handling: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  skill_arcana: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  skill_athletics: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  skill_deception: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  skill_history: {
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

  skill_medicine: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  skill_nature: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  skill_perception: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  skill_performance: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  skill_persuasion: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  skill_religion: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  skill_slight_of_hand: {
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

  armor: {
    type: Sequelize.INTEGER,
    defaultValue: 10
  },

  speed: {
    type: Sequelize.INTEGER,
    defaultValue: 10
  },

  health: {
    type: Sequelize.INTEGER,
    defaultValue: 10
  },

  languages: {
    type: Sequelize.STRING
  },

  proficiencies: {
    type: Sequelize.STRING
  }
})

module.exports = Character5thEdit
