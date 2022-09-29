const express = require("express")
const router = express.Router()

const {login, dashboard} = require("../controllers/main")

const authMidleware = require("../middleware/auth")

router.route('/dashboard').get(authMidleware, dashboard)
router.route('/login').post(login)