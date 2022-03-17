const router = require('express').Router();
const cryptoControllers = require('../components/crypto.js');

// get ether price
router.get('/ether', cryptoControllers.etherPrice);

// get btc price
router.get('/bitcoin', cryptoControllers.btcPrice);

module.exports = router;