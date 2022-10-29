interface IService<T> {
  create(obj:unknown):Promise<T>,
  readOne(_id:string):Promise<T>,
  read():Promise<T[]>,
  update(string: string, obj: T):Promise<T | null>,
  delete(string: string):Promise<T | null>,
}

export default IService;