const auth = require('../controllers/authController')
const router = require('express').Router()
const controller = require('../controllers/userController')

router.route('/').get(auth.protect, auth.role(['admin']), controller.getAllUsers)
router.route('/signup').post(auth.signUp)
router.route('/signin').post(auth.login)
router.route('/self').get(auth.protect, auth.userSelf)
router.route('/logout').get(auth.protect, auth.logout)
router.route('/:id').get(auth.protect, auth.role(['admin']), controller.getOneUser)

module.exports = router
