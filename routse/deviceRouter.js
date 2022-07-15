const { Router } = require('express')
const Route = require('express')
const router = new Route()
const deviceController = require('../controllers/deviceController')

router.post('/', deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getById)
router.delete('/:id', deviceController.delete)

module.exports = router