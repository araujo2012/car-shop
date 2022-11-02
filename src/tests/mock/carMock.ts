import { ICar } from "../../interfaces/ICar";

const carMock:ICar = {
  doorsQty: 2,
  seatsQty: 2,
  model: 'hb20',
  year: 2013,
  color: 'white',
  buyValue: 40000,
}

const carMockId:ICar & { _id: number } = {
  _id: 1,
  doorsQty: 2,
  seatsQty: 2,
  model: 'hb20',
  year: 2013,
  color: 'white',
  buyValue: 40000,
}

const carsMock:ICar[] = [{
  doorsQty: 2,
  seatsQty: 2,
  model: 'hb20',
  year: 2013,
  color: 'white',
  buyValue: 40000,
},{
  doorsQty: 3,
  seatsQty: 3,
  model: 'fiat',
  year: 2018,
  color: 'black',
  buyValue: 35000,
}]

const carsMockId:Array<ICar & { _id: number }> = [{
  _id: 1,
  doorsQty: 2,
  seatsQty: 2,
  model: 'hb20',
  year: 2013,
  color: 'white',
  buyValue: 40000,
},{
  _id: 2,
  doorsQty: 3,
  seatsQty: 3,
  model: 'fiat',
  year: 2018,
  color: 'black',
  buyValue: 35000,
}]

export {
  carMock,
  carsMock,
  carsMockId,
  carMockId,
}