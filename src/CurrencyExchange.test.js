import CurrencyExchange from './CurrencyExchange'

let exchange

beforeEach(() => {
  exchange = new CurrencyExchange([
    { code: 'USD', buy: 3, sell: 4 },
    { code: 'EUR', buy: 4, sell: 5 },
    { code: 'GBP', buy: 6, sell: 10 },
  ])
})

afterEach(() => {
   exchange = undefined
})

test('CurrencyExchange powinien byc klasa', () => {
  expect(CurrencyExchange.toString()).toContain('class')
});

describe('getCurrencyList', () => {
  test('jest funkcja', () => {

    expect(typeof exchange.getCurrencyList).toEqual('function')
  });

  test('zwraca liste walut', () => {

    expect(exchange.getCurrencyList()).toEqual(['USD', 'EUR', 'GBP'])
  });
});

describe('getCurrentate', () => {
  test('powinna byc funk', () => {
  const exchange = new CurrencyExchange(['USD', 'EUR', 'GBP'])

  expect(typeof exchange.getCurrencyRate).toEqual('function')
  })

  test('zwracy kurs wymiany dla dannej waluty', () => {

    expect(exchange.getCurrencyRate('USD')).toEqual({
      buy: 3, sell: 4
    })
  })
})

