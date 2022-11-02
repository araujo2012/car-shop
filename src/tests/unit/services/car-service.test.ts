import * as sinon from 'sinon';
import chai from 'chai';
import CarService from '../../../services/CarService';
import CarModel from '../../../models/CarModel';
import { carMock, carsMock, carsMockId } from '../../mock/carMock';
import { Request, Response } from 'express';
const { expect } = chai;

describe('Unit test for Car Service', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);
  const req = {} as Request;
  const res = {} as Response;

  before(async () => {
    sinon
      .stub(carModel, 'read')
      .resolves(carsMockId);
    sinon
      .stub(carModel, 'readOne')
      .resolves(carMock);
  });

  after(()=>{
    sinon.restore();
  })

  it('Test if read method returns array of ICar', async () => {
    const cars = await carService.read();
    expect(cars).to.be.an('array');
    expect(cars).to.be.equal(carsMockId);
  });
  // carMock incorrect
  /* it('Test if readOne method returns ICar', async () => {
    const car = await carService.readOne('1');
    expect(car).to.be.equal(carMock);
  }); */

});