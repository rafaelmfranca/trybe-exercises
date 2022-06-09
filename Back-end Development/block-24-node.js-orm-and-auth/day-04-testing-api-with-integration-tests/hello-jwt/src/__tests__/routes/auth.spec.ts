import app from '@app';
import { StaffMock } from '@mocks/models';
import { signInMock } from '@mocks/requests';
import { Staff } from '@models';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';

chai.use(chaiHttp);

describe('✅ /auth', () => {
  describe('➡️ Middleware validation behavior', () => {
    let response: any;

    describe('When username is empty', () => {
      before(async () => {
        response = await chai
          .request(app)
          .post('/auth')
          .send(signInMock.emptyUsername);
      });

      it('should return an object with a message key', () => {
        expect(response.body).to.be.an('object');
        expect(response.body).to.have.ownProperty('message');
      });

      it('should return the correct message', () => {
        expect(response.body.message).to.be.equal(
          '"username" is not allowed to be empty'
        );
      });
    });

    describe('When username is invalid', () => {
      before(async () => {
        response = await chai
          .request(app)
          .post('/auth')
          .send(signInMock.invalidUsername);
      });

      it('should return an object with a message key', () => {
        expect(response.body).to.be.an('object');
        expect(response.body).to.have.ownProperty('message');
      });

      it('should return the correct message', () => {
        expect(response.body.message).to.be.equal(
          '"username" length must be at least 5 characters long'
        );
      });
    });

    describe('When password is empty', () => {
      before(async () => {
        response = await chai
          .request(app)
          .post('/auth')
          .send(signInMock.emptyPassword);
      });

      it('should return an object with a message key', () => {
        expect(response.body).to.be.an('object');
        expect(response.body).to.have.ownProperty('message');
      });

      it('should return the correct message', () => {
        expect(response.body.message).to.be.equal(
          '"password" is not allowed to be empty'
        );
      });
    });

    describe('When password is invalid', () => {
      before(async () => {
        response = await chai
          .request(app)
          .post('/auth')
          .send(signInMock.invalidPassword);
      });

      it('should return an object with a message key', () => {
        expect(response.body).to.be.an('object');
        expect(response.body).to.have.ownProperty('message');
      });

      it('should return the correct message', () => {
        expect(response.body.message).to.be.equal(
          '"password" length must be at least 5 characters long'
        );
      });
    });
  });

  describe('➡️ Auth behavior', () => {
    let response: any;

    describe('When username and password are valid in DB', () => {
      before(async () => {
        sinon
          .stub(Staff, 'getByUsernameAndPassword')
          .callsFake(StaffMock.getByUsernameAndPassword as any);

        response = await chai
          .request(app)
          .post('/auth')
          .send(signInMock.validPayload);
      });

      after(() => {
        sinon.restore();
      });

      it('should return an object with a token key', () => {
        expect(response.body).to.be.an('object');
        expect(response.body).to.have.ownProperty('token');
      });

      it('should return a token in string format', () => {
        expect(response.body.token).to.be.a('string');
      });
    });

    describe('When username and password are invalid in DB', () => {
      before(async () => {
        sinon
          .stub(Staff, 'getByUsernameAndPassword')
          .callsFake(StaffMock.getByUsernameAndPassword2 as any);

        response = await chai
          .request(app)
          .post('/auth')
          .send(signInMock.invalidPayload);
      });

      after(() => {
        sinon.restore();
      });

      it('should return an object with a message key', () => {
        expect(response.body).to.be.an('object');
        expect(response.body).to.have.ownProperty('message');
      });

      it('should return the correct message', () => {
        expect(response.body.message).to.be.equal('Invalid credentials');
      });

      it('should return a status code of 401', () => {
        expect(response.status).to.be.equal(401);
      });
    });
  });
});
