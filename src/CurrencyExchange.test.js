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

// if [] = null / -1 / number / string
// is positive number (testy)

// Testowanie tablicy dannych
test.each([
  [ undefined, undefined ],
  [ 'USD', undefined ],
  [ undefined, 'USD' ],
  [ 'USD', -1 ],
  [ -1,  'USD'],
])('check it out', (...arx) => {
  expect(() => {
    new CurrencyExchange(...arx)
  }).toThrow()
})
// Buy
test.each([
  [ undefined, undefined ],
  [ 'USD', undefined ],
  [ undefined, 'USD' ],
  [ 'USD', -1 ],
  [ -1,  'USD'],
])('check it out', (...arx) => {
  expect(() => {
    buy(...arx)
  }).toThrow()
})
// Sell
test.each([
  [ undefined, undefined ],
  [ 'USD', undefined ],
  [ undefined, 'USD' ],
  [ 'USD', -1 ],
  [ -1,  'USD'],
])('check it out', (...arx) => {
  expect(() => {
    sell(...arx)
  }).toThrow()
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
    expect(typeof exchange.getCurrencyRate).toEqual('function')
  });

  test('zwracy kurs wymiany dla dannej waluty', () => {
    expect(exchange.getCurrencyRate('USD')).toEqual({
      buy: 3, sell: 4
    })
  })
})

test('zwraca kwote do zaplacenia', () => {
  expect(exchange.buy('EUR', 10)).toBeCloseTo(40.01, 2);
expect(exchange.buy('USD', 100)).toBeCloseTo(300.01, 2);
});

test('jesli kurs nie jest dodatni', () => {
  expect(() => {
    new CurrencyExchange([
      { code: 'USD', buy: 3, sell: 0 }
    ]);
}).toThrow();

  expect(() => {
    new CurrencyExchange([
        { code: 'USD', buy: -1, sell: 4 }
      ]);
    }).toThrow();

expect(() => {
  new CurrencyExchange([
      { code: 'USD', buy: null, sell: 4 }
    ]);
  }).toThrow();
});


test('prowizja nie jest dodatnia', () => {
  expect(() => {
    new CurrencyExchange([
        { code: 'USD', buy: 3, sell: 4 },
      ], { buyFee: -1, sellFee: 1 });
  }).toThrow();

  expect(() => {
    new CurrencyExchange([
        { code: 'USD', buy: 3, sell: 4 },
      ], { buyFee: 1, sellFee: -1 });
  }).toThrow();
});

