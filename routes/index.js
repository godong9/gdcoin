const express = require('express');
const router = express.Router();
const { check } = require('express-validator/check');

const Gdcoin = require('../middleware/gdcoin');

const responseMiddleware = (req, res, next) => {
	return res.json(req.responseValue)
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gd Coin' });
});

router.post('/transactions/new', [
	check('sender', 'Sender must be a String').exists(),
	check('recipient', 'Sender must be a String').exists(),
	check('amount', 'Sender must be a Int Value').isInt().exists()
], Gdcoin.newTransaction, responseMiddleware);

router.get('/mine', Gdcoin.mine, responseMiddleware);

router.get('/chain', Gdcoin.getChain, responseMiddleware);


module.exports = router;
