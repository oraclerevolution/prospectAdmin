'use strict'

const Prospection = use('App/Models/Prospection')
const Database = use('Database')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with prospections
 */
class ProspectionController {
  /**
   * Show a list of all prospections.
   * GET prospections
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const prospections = await Database.from('prospections')
    return response.json({data: prospections })
  }

  /**
   * Render a form to be used for creating a new prospection.
   * GET prospections/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({request, response}) {

    const prospection = await Prospection.create({
      reference: request.input('reference'),
      numero: request.input('numero'),
      compteur_renouveller: request.input('compteur_renouveller'),
      compteur_enlever: request.input('compteur_enlever'),
    })

    return response.json({data: {status: 0}})
  }

  /**
   * Create/save a new prospection.
   * POST prospections
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single prospection.
   * GET prospections/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing prospection.
   * GET prospections/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update prospection details.
   * PUT or PATCH prospections/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a prospection with id.
   * DELETE prospections/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ProspectionController
