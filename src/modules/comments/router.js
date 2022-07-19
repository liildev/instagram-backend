const router = require('express').Router()
const controller = require('./controller.js')


router.post('/', controller.CREATE)

router.delete('/:id', controller.DELETE)

module.exports = router