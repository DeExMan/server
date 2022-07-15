const Route = require('express')
const router = new Route()
const deviceRouter = require('./deviceRouter')
const barndRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', barndRouter)
router.use('/device', deviceRouter)


module.exports = router