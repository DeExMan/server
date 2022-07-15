const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
    async create(req, res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)

    }

    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json({types})
    }

    async delete(req, res, next) {
        const {id} = req.params
        console.log(req.body)
        if(!id) {
            return next(ApiError.badRequest('Не задан ID'))
        }
        await Type.destroy({ where: {id}})
        return res.json({"message":"Удалено успешно"})
    }
}

module.exports = new TypeController()