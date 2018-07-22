export default class CurrencyExchange {
  constructor(currencies) {
    this.currencies = currencies
  }

  getCurrencyList() {
    return this.currencies
  }
}