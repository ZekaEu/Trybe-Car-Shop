import { Car, CarInterface } from '../interfaces/CarInterface';
import Service, { ServiceError } from '.';
import CarModel from '../models/CarModel';

export default class CarService extends Service<Car> {
  constructor(model = new CarModel()) {
    super(model);
  }

  create = async (obj: Car): Promise<Car | ServiceError | null> => {
    const parsed = CarInterface.safeParse(obj);
    if (!parsed.success) return { error: parsed.error };
    return this.model.create(obj);
  };

  read = async (): Promise<Car[]> => this.model.read();

  readOne = async (id: string): Promise<Car | ServiceError | null> =>
    this.model.readOne(id);

  update = async (id: string, obj: Car): Promise<Car | ServiceError | null> => {
    const parsed = CarInterface.safeParse(obj);
    if (!parsed.success) return { error: parsed.error };
    return this.model.update(id, obj);
  };
}
