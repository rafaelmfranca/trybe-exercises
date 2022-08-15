import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import LensModel from '../../../models/lens';
import { lensMockWithId } from '../../mocks/lensMock';

describe('✅ Lens Model', () => {
  const lensModel = new LensModel();

  before(() => {
    sinon.stub(Model, 'create').resolves(lensMockWithId);
    sinon.stub(Model, 'findOne').resolves(lensMockWithId);
    sinon.stub(Model, 'find').resolves([lensMockWithId]);
    sinon.stub(Model, 'findByIdAndDelete').resolves(lensMockWithId);
  });

  after(() => {
    sinon.restore();
  });

  describe('creating a lens', () => {
    it('successfully created', async () => {
      const newLens = await lensModel.create(lensMockWithId);
      expect(newLens).to.be.deep.equal(lensMockWithId);
    });
  });

  describe('searching a lens', () => {
    it('succesfully found', async () => {
      const lens = await lensModel.readOne('62cf1fc6498565d94eba52cd');
      expect(lens).to.be.deep.equal(lensMockWithId);
    });

    it('_id not found', async () => {
      try {
        await lensModel.readOne('123ERRADO');
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });

  describe('searching all lenses', () => {
    it('successfully found', async () => {
      const lensesFound = await lensModel.read();
      expect(lensesFound).to.be.deep.equal([lensMockWithId]);
    });
  });

  describe('deleting a lens', () => {
    it('successfully deleted', async () => {
      const lensDeleted = await lensModel.destroy('62cf1fc6498565d94eba52cd');
      expect(lensDeleted).to.be.deep.equal(lensMockWithId);
    });

    it('_id not found', async () => {
      try {
        await lensModel.destroy('123ERRADO');
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });
});
