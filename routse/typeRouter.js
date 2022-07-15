
const Route = require('express')
const router = new Route()
const checkRole = require('../middleware/checkRoleMiddleware')
const TypeController = require('../controllers/typeController')

router.post('/', checkRole('ADMIN'), TypeController.create)
router.get('/', TypeController.getAll)
router.delete('/', checkRole('ADMIN'), TypeController.delete)

module.exports = router