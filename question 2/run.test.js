const data = require('./data.json');
const { sumTotal, isIntegerType } = require('./func');

test('sum total of price', () => {
    expect(sumTotal(data.product)).toBe(52000000)
});

test('should be integer type', () => {
    expect(isIntegerType(data.orderNumber)).toBe(true)
});