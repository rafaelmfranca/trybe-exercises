import { expect } from 'chai';
import sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import FrameModel from '../../../models/frame';
import FrameService from '../../../services/frame';
import { frameMock, frameMockWithId } from '../../mocks/frameMock';

describe('✅ FrameService', () => {
  const frameModel = new FrameModel();
  const frameService = new FrameService(frameModel);

  before(() => {
    sinon.stub(frameModel, 'create').resolves(frameMockWithId);
    sinon
      .stub(frameModel, 'read')
      .onCall(0)
      .resolves([frameMockWithId])
      .onCall(1)
      .resolves([]);
    sinon
      .stub(frameModel, 'readOne')
      .onCall(0)
      .resolves(frameMockWithId)
      .onCall(1)
      .resolves(null);
    sinon
      .stub(frameModel, 'destroy')
      .onCall(0)
      .resolves(frameMockWithId)
      .onCall(1)
      .resolves(null);
  });

  after(() => {
    sinon.restore();
  });

  describe('creating a frame', () => {
    it('successfully created', async () => {
      const newFrame = await frameService.create(frameMock);
      expect(newFrame).to.be.deep.equal(frameMockWithId);
    });

    it('unsuccessfully', async () => {
      try {
        await frameService.create({} as any);
      } catch (error) {
        expect(error).to.be.instanceOf(ZodError);
      }
    });
  });

  describe('searching a frame', () => {
    it('successfully found', async () => {
      const frame = await frameService.readOne(frameMockWithId._id);
      expect(frame).to.be.deep.equal(frameMockWithId);
    });

    it('_id not found', async () => {
      try {
        await frameService.readOne('123ERRADO');
      } catch (error: any) {
        expect(error.message).to.be.eq(ErrorTypes.EntityNotFound);
      }
    });
  });

  describe('searching all frames', () => {
    it('should return an array of frames', async () => {
      const frames = await frameService.read();
      expect(frames).to.be.deep.equal([frameMockWithId]);
    });

    it('should return an empty array when there is no documents in the db', async () => {
      const frames = await frameService.read();
      expect(frames).to.be.deep.equal([]);
    });
  });

  describe('deleting a frame', () => {
    it('successfully deleted', async () => {
      const frame = await frameService.destroy(frameMockWithId._id);
      expect(frame).to.be.deep.equal(frameMockWithId);
    });

    it('_id not found', async () => {
      try {
        await frameService.destroy('123ERRADO');
      } catch (error: any) {
        expect(error.message).to.be.eq(ErrorTypes.EntityNotFound);
      }
    });
  });
});
