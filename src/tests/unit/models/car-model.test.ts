import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import CarModel from '../../../models/CarModel';
import { carMock, carMockId } from '../../mock/carMock';
const carModel = new CarModel();

describe('Unit test for Car Model', () => {

  before(async () => {
    sinon.stub(carModel, 'create').resolves(carMockId);
  });

  after(()=>{
    sinon.restore();
  })

  it('Test if create method returns ICar with Id', async () => {
    const result = await carModel.create(carMock);
    expect(result).to.be.deep.equal(carMockId);
  });

});