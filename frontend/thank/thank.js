let { query } = require("express");
const express = require("express");
const connection = require('../../connection');
const router = express.Router();

router.get('/thank.html', function (req, res) {
    res.sendFile(__dirname + '/thank.html');
});

module.exports = router;