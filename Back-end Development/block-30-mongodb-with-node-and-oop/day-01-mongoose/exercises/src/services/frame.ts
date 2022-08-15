import { ErrorTypes } from '../errors/catalog';
import IModel from '../interfaces/IModel';
import IService from '../interfaces/IService';
import TFrame, { FrameZodSchema } from '../schemas/frame';

export default class FrameService implements IService<TFrame> {
  private _frame: IModel<TFrame>;

  constructor(model: IModel<TFrame>) {
    this._frame = model;
  }

  public async create(obj: TFrame) {
    const parsed = FrameZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._frame.create(obj);
  }

  public async readOne(_id: string) {
    const frame = await this._frame.readOne(_id);
    if (!frame) throw new Error(ErrorTypes.EntityNotFound);
    return frame;
  }
}
