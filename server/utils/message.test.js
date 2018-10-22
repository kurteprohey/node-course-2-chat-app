const expect = require('expect');
const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    // assert from is correct text mathes up createdAt is number
    const text = 'Hello from the test';
    const from = 'test@test.com';
    const res = generateMessage(from, text);
    expect(res.text).toEqual(text);
    expect(res.from).toEqual(from);
    expect(typeof res.createdAt).toEqual('number');
  });
});