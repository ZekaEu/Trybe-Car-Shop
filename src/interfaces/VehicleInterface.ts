import { z } from 'zod';

const VehicleInterface = z.object({
  model: z.string().min(3),
  year: z.number().min(1900).max(2022),
  color: z.string().min(3),
  status: z.boolean().optional(),
  buyValue: z.number().int(),
});

type Vehicle = z.infer<typeof VehicleInterface>;

export { Vehicle, VehicleInterface };
