const assert = require('assert');

// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
const sum = (...args) => args.reduce((a, b) => a + b, 0);

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(0, 2, 3), 5);
assert.strictEqual(sum(1, 2, 3, 4, 5), 15);
