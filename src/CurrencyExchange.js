export default class CurrencyExchange {
  constructor(data) {
    const { names, rates } = data.reduce((accum, entry) => {
      const { code, buy, sell } = entry;

      accum.names.push(code);
      accum.rates[code] = { buy, sell }

      return accum
    }, { names: [], rates: {} })

    this.currencies = names
    this.rates = rates
  }

  getCurrencyList() {
    return this.currencies
  }

  getCurrencyRate(code) {
    return this.rates[code]
  }
}