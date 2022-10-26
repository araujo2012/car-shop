import IService from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class CarService implements IService<ICar> {
  // quando fazemos IService<ICar> acima 
  // estamos implementando a interface com o tipo ICar com o parâmetro genérico
  private _car:IModel<ICar>;
  // o mesmo fazemos aqui com a interface do Model
  constructor(model:IModel<ICar>) {
    this._car = model;
  }

  public async create(obj:unknown):Promise<ICar> {
    // recebemos uma variável qualquer, e garantimos que ela é um objeto com formato correto utilizando o zod
    const parsed = CarZodSchema.safeParse(obj);

    // agora, caso os tipos estejam errados (success = false), nós lançaremos um erro
    if (!parsed.success) {
      throw parsed.error; // vamos falar sobre como esse erro tratá-lo logo logo
    }
    return this._car.create(parsed.data);
  }

  public async readOne(_id:string):Promise<ICar> {
    const frame = await this._car.readOne(_id);
    if (!frame) throw new Error(ErrorTypes.EntityNotFound);
    return frame;
  }
}

export default CarService;