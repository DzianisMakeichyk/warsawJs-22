import CurrencyExchange from './CurrencyExchange'

test('CurrencyExchange powinien byc klasa', () => {
  expect(CurrencyExchange.toString()).toContain('class')
});

describe('getCurrencyList', () => {
  test('jest funkcja', () => {
  const exchange = new CurrencyExchange(['USD', 'EUR', 'GBP'])

    expect(typeof exchange.getCurrencyList).toEqual('function')
  });

  test('zwraca liste walut', () => {
    const exchange = new CurrencyExchange(['USD', 'EUR', 'GBP'])

    expect(exchange.getCurrencyList()).toEqual(['USD', 'EUR', 'GBP'])
  });
});



