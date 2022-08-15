import { expect } from 'chai';
import { Request, Response } from 'express';
import sinon from 'sinon';
import FrameController from '../../../controllers/frame';
import FrameModel from '../../../models/frame';
import FrameService from '../../../services/frame';
import { frameMock, frameMockWithId } from '../../mocks/frameMock';

describe('✅ FrameController', () => {
  const frameModel = new FrameModel();
  const frameService = new FrameService(frameModel);
  const frameController = new FrameController(frameService);

  const req = {} as Request;
  const res = {} as Response;

  before(() => {
    sinon.stub(frameService, 'create').resolves(frameMock);
    sinon.stub(frameService, 'readOne').resolves(frameMock);
    sinon.stub(frameService, 'read').resolves([frameMock]);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore();
  });

  describe('creating a frame', () => {
    it('successfully created', async () => {
      req.body = frameMock;

      await frameController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(frameMock)).to.be.true;
    });
  });

  describe('searching a frame', () => {
    it('successfully found', async () => {
      req.params = { id: frameMockWithId._id };

      await frameController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(frameMock)).to.be.true;
    });
  });

  describe('searching all frames', () => {
    it('should return an array of frames', async () => {
      await frameController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([frameMock])).to.be.true;
    });
  });
});
