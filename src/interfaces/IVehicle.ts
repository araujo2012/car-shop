import { z } from 'zod';

export interface IVehicle {
  model: string,
  year: number,
  color: string,
  status?: boolean,
  buyValue: number,
}

export const VehicleZodSchema = z.object({
  model: z.string(),
  year: z.number(),
  color: z.string(),
  status: z.boolean().optional(),
  buyValue: z.number(),
});
