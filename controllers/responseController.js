const mongoose = require('mongoose');
const Response = require('../models/responsesModel');

exports.createResponse = async(req, res, next) => {
    
    try {
        const newResponse = await Response.create(req.body);

        res.status(201).json({
            status: 'success',
            data: newResponse
        })
    } catch(err) {
        res.status(400).json({
            status: 'failed',
            err
        })
    }
}