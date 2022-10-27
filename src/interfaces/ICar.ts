import { z } from 'zod';
import { IVehicle, VehicleZodSchema } from './IVehicle';

export interface ICar extends IVehicle {
  doorsQty: number,
  seatsQty: number,
}

export const CarZodSchema = VehicleZodSchema.extend({
  doorsQty: z.number(),
  seatsQty: z.number(),
});
