const assert = require('assert');

const sum = (...args) => args.reduce((a, b) => a + b, 0);

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(0, 2, 3), 5);
assert.strictEqual(sum(1, 2, 3, 4, 5), 15);
