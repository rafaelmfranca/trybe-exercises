const { expect } = require('chai');
const calcArea = require('../calcArea');
const rdl = require('readline-sync');
const sinon = require('sinon');

describe('Run calcArea script', () => {
  describe('When the input value is greater than or equal 0', () => {
    before(() => {
      sinon.stub(rdl, 'questionInt').returns(10);
    });

    after(() => {
      rdl.questionInt.restore();
    });

    it('should return a number', () => {
      const response = calcArea();
      expect(response).to.be.a('number');
    });

    it('should return "100" when input value is "10"', () => {
      const response = calcArea();
      expect(response).to.be.equals(100);
    });
  });

  describe('When the input value is negative', () => {
    it('should return an error with the message "Invalid input value"', () => {
      sinon.stub(rdl, 'questionInt').returns(-1);
      expect(calcArea).to.throw('Invalid input value');
    });
  });
});
