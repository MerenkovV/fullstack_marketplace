const ApiError = require('../errors/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const generateJWT = (id, email, role) => {
    return jwt.sign(
        {id, email, role}, 
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration (req, res, next) {
        const {email, password, role} = req.body
        if(!email || !password) return next(ApiError.badRequest('Не введён логин/пароль'))
        const candidate = await User.findOne({where: {email}})
        if(candidate) return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJWT(user.id, email, user.role)
        return res.json({token})
    }
    async login (req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if(!user) return next(ApiError.badRequest('Неверно введён логин/пароль'))
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword) return next(ApiError.badRequest('Неверно введён логин/пароль'))
        const token = generateJWT(user.id, user.email, user.role)
        return res.json({token})
    }
    async auth (req, res, next) {
        const isReal = await User.findOne({where: req.user.email})
        if(!isReal) return next(ApiError.badRequest('Неверно введён логин/пароль'))
        const token = generateJWT(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()