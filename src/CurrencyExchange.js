export default class CurrencyExchange {
  constructor(data, options) {
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error('Invalid rates');
    }

    const { names, rates } = data.reduce((accum, { code, buy, sell }) => {

    if (!code || buy <= 0 || sell <= 0 || buy > sell) {
      throw new Error('Invalid currency data');
    }

      accum.names.push(code);
      accum.rates[code] = { buy, sell }

      return accum
    }, { names: [], rates: {} })

    const { buyFee, sellFee } = Object.assign({
      buyFee: 0.01,
      sellFee: 0.01
    }, options);

    if (buyFee < 0.01 || sellFee < 0.01) {
      throw new Error('Invalid fees');
    }

    this.buyFee = buyFee;
    this.sellFee = sellFee;
    this.currencies = names;
    this.rates = rates;
  }

  getCurrencyList() {
    return this.currencies
  }

  getCurrencyRate(code) {
    return this.rates[code]
  }

  buy(currency, amount) {
    const amountNum = Number(amount);
    if (!this.rates[currency] || isNaN(amountNum) || amountNum <= 0) {
      throw new Error('Invalid currency or amount');
    }

    return this.rates[currency].buy * amount + this.buyFee;
  }

  sell(currency, amount) {
    const amountNum = Number(amount);
    if (!this.rates[currency] || isNaN(amountNum) || amountNum <= 0) {
      throw new Error('Invalid currency or amount');
    }

    return this.rates[currency].sell * amount + this.sellFee;
  }
}