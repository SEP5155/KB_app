const express = require('express');
const responseController = require('../controllers/responseController');

const router = express.Router();

router
    .route('/')
    .post(responseController.createResponse);


module.exports = router;