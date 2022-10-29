import * as sinon from 'sinon';
import chai from 'chai';
import { carsMock, carMock } from '../../mock/carMock';
import CarController from '..//../../controllers/CarController';
import CarService from '../../../services/CarService';
import CarModel from '../../../models/CarModel';
const { expect } = chai;
import { Request, Response } from 'express';

describe('Unit test for Car Controller', () => {

  const carService = new CarService(new CarModel);
  const carController = new CarController(carService);
  const req = {} as Request;
  const res = {} as Response;

  before(async () => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon
      .stub(carService, 'read')
      .resolves(carsMock);
    sinon
      .stub(carService, 'readOne')
      .resolves(carMock);
  });

  after(()=>{
    sinon.restore();
  })

  it('Test if read method returns array of ICar', async () => {
    await carController.read(req, res);
    expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(carsMock)).to.be.true;
  });

});