const express = require('express');

const router = express.Router();

const whatappController = require('../controllers/whatsappController');

router.get('/', whatappController.VerfiToken)
.post('/', whatappController.ReceivedMesage)