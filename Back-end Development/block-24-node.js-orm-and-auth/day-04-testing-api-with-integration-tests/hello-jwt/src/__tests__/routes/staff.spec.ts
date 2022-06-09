import app from '@app';
import { StaffMock } from '@mocks/models';
import { Staff } from '@models';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';

chai.use(chaiHttp);

describe('✅ /staff', () => {
  describe('Consult the list of staffs', () => {
    let response: any;

    before(async () => {
      sinon.stub(Staff, 'getAll').callsFake(StaffMock.getAll as any);
      response = await chai.request(app).get('/staff');
    });

    after(() => {
      sinon.restore();
    });

    it('should return a list of staffs', () => {
      expect(response.body).to.have.length(2);
    });

    it('should return status code 200', () => {
      expect(response).to.have.status(200);
    });
  });
});
