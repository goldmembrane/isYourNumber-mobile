const express = require('express')
const router = express.Router()

const { RankController } = require('../controllers')

router.get('/', RankController.get)
router.post('/', RankController.post)

module.exports = router