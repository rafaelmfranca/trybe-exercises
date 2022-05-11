const { expect } = require('chai');
const writeFile = require('../writeFile');
const sinon = require('sinon');
const fs = require('fs');

const fileName = 'test.txt';
const fileContent = 'test content test content';

describe('writeFile.js', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  it('should return "ok" when called with correct params', () => {
    expect(writeFile(fileName, fileContent)).to.be.equals('ok');
  });
});
