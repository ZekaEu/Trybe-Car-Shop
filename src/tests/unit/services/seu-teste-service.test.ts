import { expect } from 'chai';
import * as sinon from 'sinon';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import { carMock, carArrMock, invalidCarMock } from '../../mocks';

const carModel = new CarModel();
const carService = new CarService(carModel);

describe('CarService', () => {
  describe('read', () => {
    before(() => {
      sinon.stub(carModel, 'read').resolves(carArrMock)
    });
    after(() => {
      (carModel.read as sinon.SinonStub).restore();
    });

    it('Retorna array de carros', async () => {
      const result = await carService.read();
      expect(result).to.be.deep.eq(carArrMock);
    });
  });

  describe('readOne', () => {
    before(() => {
      sinon.stub(carModel, 'readOne').resolves(carMock)
    });
    after(() => {
      (carModel.readOne as sinon.SinonStub).restore();
    });

    it('Retorna objeto "carro" correto', async () => {
      const result = await carService.readOne('1');
      expect(result).to.be.deep.eq(carMock);
    });
  });

  describe('create', () => {
    before(() => {
      sinon.stub(carModel, 'create').resolves(carMock)
    });
    after(() => {
      (carModel.create as sinon.SinonStub).restore();
    });

    it('Retorna objeto "carro" correto', async () => {
      const result = await carService.create(carMock);
      expect(result).to.be.deep.eq(carMock);
    });
  });
});
