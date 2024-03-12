// let { query } = require("express");
const express = require("express");
const connection = require('../../connection');
const router = express.Router();

router.get('/police.html', (req, res) => {
    res.sendFile(__dirname + '/police.html');
});

module.exports = router;