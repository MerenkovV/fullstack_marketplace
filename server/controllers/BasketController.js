const { BasketDevice } = require("../models/models")
const ApiError = require('../errors/ApiError')

class BasketController {
    async check (req, res, next) {
        const userId = req.user.id
        const devicesArray = await BasketDevice.findAll({where: {basketId: userId}})
        return res.json({basket: devicesArray})
    }
    async add (req, res, next) {
        const userId = req.user.id
        const {deviceId} = req.body
        if(!deviceId) return next(ApiError.badRequest('Не введён номер девайса'))
        const toBasket = await BasketDevice.create({basketId: userId, deviceId: Number(deviceId)})
        return res.json({basket: toBasket})
    }
    async remove (req, res, next) {
        const userId = req.user.id
        const {deviceId} = req.body
        if(!deviceId) return next(ApiError.badRequest('Не введён номер девайса'))
        const toBasket = await BasketDevice.destroy({where: {basketId: userId, deviceId: Number(deviceId)}})
        return res.json({basket: toBasket})
    }
}

module.exports = new BasketController()