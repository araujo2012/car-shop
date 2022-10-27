import { z } from 'zod';
import { IVehicle, VehicleZodSchema } from './IVehicle';

export interface IMotorcycle extends IVehicle {
  category: 'Street' | 'Custom' | 'Trail',
  engineCapacity: number,
}

export const MotorcycleZodSchema = VehicleZodSchema.extend({
  category: z.union([
    z.literal('Street'),
    z.literal('Custom'),
    z.literal('Trail'),
  ]),
  engineCapacity: z.number().lte(2500),
});
