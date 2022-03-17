const { default: axios } = require('axios');
const ccxt = require ('ccxt');

const exchange = new ccxt.binance();

const getValue = async(asset = "PI", money = "EUR") => {
    try {
        asset = asset.toUpperCase();
        money = money.toUpperCase();
        var infos = await exchange.fetchTicker(asset + "/" + money);
        var ask = +(infos['info']['askPrice']);
        var bid = +(infos['info']['bidPrice']);
        var value = (ask + bid) / 2;
        return (+(value.toFixed(2)));
    } catch (error) {
        throw ("Error" + error);
    }
}

module.exports.etherPrice = async(req, res) => {
    try {
        var ethValue = await getValue("ETH");
        res.status(200).json(ethValue);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports.btcPrice = async(req, res) => {
    try {
        var btcValue = await getValue("BTC");
        res.status(200).json(btcValue);
    } catch (error) {
        res.status(500).json({error});
    }
}