'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProspectionSchema extends Schema {
  up () {
    this.create('prospections', (table) => {
      table.increments()
      table.string('reference', 150)
      table.string('numero', 150)
      table.string('compteur_renouveller',150)
      table.string('compteur_enlever', 150)
      table.timestamps()
    })
  }

  down () {
    this.drop('prospections')
  }
}

module.exports = ProspectionSchema
