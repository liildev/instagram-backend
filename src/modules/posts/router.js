const router = require('express').Router()
const { postUpload } = require('../../libs/multer.js')
const controller = require('./controller.js')


router.route('/') 
    .get(controller.GETALL)
    .post(controller.CREATE)

router.route('/:id')
    .get(controller.GETONE)
    .put(controller.PUT)
    .delete(controller.DELETE)

router.post('/:id/photos', postUpload, controller.POSTPHOTOS)

module.exports = router