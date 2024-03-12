let { query } = require("express");
const express = require("express");
const connection = require('../../connection');
const router = express.Router();

router.get('/history.html', function (req, res) {
    res.sendFile(__dirname + '/history.html');
});

module.exports = router;