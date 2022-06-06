import { expect } from 'chai';
import { Model } from 'mongoose';
import * as sinon from 'sinon';
import CarModel from '../../../models/CarModel';
import { carMock, carArrMock } from '../../mocks';

const carModel = new CarModel();

describe('CarModel', () => {
  describe('read', () => {
    before(() => {
      sinon.stub(Model, 'find').resolves(carArrMock);
    });

    after(() => {
      (Model.find as sinon.SinonStub).restore();
    });

    it('Retorna array de carros', async () => {
      const result = await carModel.read()
      expect(result).to.be.deep.eq(carArrMock);
    });
  });

  describe('readOne', () => {
    before(() => {
      sinon.stub(Model, 'findOne').resolves(carMock);
    });

    after(() => {
      (Model.findOne as sinon.SinonStub).restore();
    });

    it('Retorna objeto "carro" correto', async () => {
      const result = await carModel.readOne('1');
      expect(result).to.be.deep.eq(carMock);
    });
  });
});
