import { Schema, model } from 'mongoose';
import { ICar } from '../interfaces/ICar';

const carSchema = new Schema<ICar>({
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
});

const CarModel = model<ICar>('Book', carSchema);

export default CarModel;