const express = require("express");
const router = express.Router();

//Main Routes - simplified for now
router.get('/', (req, res) => {
    res.send('Hello World!')
});

module.exports = router;
