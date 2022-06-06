import { z } from 'zod';
import { VehicleInterface } from './VehicleInterface';

const CarInterface = VehicleInterface.extend({
  doorsQty: z.number().int().min(2).max(4),
  seatsQty: z.number().int().min(2).max(7),
});

type Car = z.infer<typeof CarInterface>;

export { Car, CarInterface };
