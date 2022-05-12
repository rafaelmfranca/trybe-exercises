const { expect } = require('chai');
const { writeFile, readFile } = require('../writeFile');
const sinon = require('sinon');
const fs = require('fs');

const fileName = 'test.txt';
const fileContent = 'test content';

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

describe('readFile.js', () => {
  before(() => {
    sinon.stub(fs, 'readFileSync').returns(fileContent);
  });

  after(() => {
    fs.readFileSync.restore();
  });

  it('should return "test content" when called with correct params', () => {
    expect(readFile(fileName)).to.be.equals(fileContent);
  });
});
