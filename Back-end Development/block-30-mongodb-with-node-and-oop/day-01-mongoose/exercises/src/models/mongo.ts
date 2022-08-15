import { isValidObjectId, Model } from 'mongoose';
import IModel from '../interfaces/IModel';

export default abstract class MongoModel<T> implements IModel<T> {
  protected _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  public async create(obj: T) {
    return this._model.create({ ...obj });
  }

  public async readOne(_id: string) {
    if (!isValidObjectId(_id)) throw Error('InvalidMongoId');
    return this._model.findOne({ _id });
  }

  public async read() {
    return this._model.find();
  }

  public async destroy(_id: string) {
    if (!isValidObjectId(_id)) throw Error('InvalidMongoId');
    return this._model.findByIdAndDelete({ _id });
  }
}
