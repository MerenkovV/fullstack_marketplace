const Router = require('express')
const router = new Router
const authMiddleware = require('../middleware/authMiddleware');
const BasketController = require('../controllers/BasketController');

router.post('/add', authMiddleware, BasketController.add)
router.put('/remove', authMiddleware, BasketController.remove)
router.get('/check', authMiddleware, BasketController.check)

module.exports = router