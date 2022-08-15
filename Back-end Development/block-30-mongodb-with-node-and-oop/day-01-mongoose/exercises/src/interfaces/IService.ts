export default interface IService<T> {
  create(obj: T): Promise<T>;
  readOne(_id: string): Promise<T>;
  read: () => Promise<T[]>;
  destroy(_id: string): Promise<T | null>;
}
