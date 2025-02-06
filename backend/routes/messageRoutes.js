const express = require('express')
const { model } = require('mongoose');
const { protect } = require('../middlewares/authMiddleware');
const { sendMessage, allMessages } = require('../controllers/messageController');

const router = express.Router()


    router.route('/').post(protect, sendMessage)
    router.route('/:chatId').get(protect,allMessages)





module.exports=router;