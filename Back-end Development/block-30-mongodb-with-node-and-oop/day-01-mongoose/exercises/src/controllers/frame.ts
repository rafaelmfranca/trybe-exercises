import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import TFrame from '../schemas/frame';

interface CustomRequest extends Request {
  body: TFrame;
}

export default class FrameController {
  constructor(private _service: IService<TFrame>) {}

  public create = async (req: CustomRequest, res: Response<TFrame>) => {
    const { material, color } = req.body;
    const result = await this._service.create({ material, color });
    return res.status(201).json(result);
  };

  public readOne = async (req: Request, res: Response<TFrame>) => {
    const frame = await this._service.readOne(req.params.id);
    return res.status(200).json(frame);
  };

  public read = async (_req: Request, res: Response<TFrame[]>) => {
    const frames = await this._service.read();
    return res.status(200).json(frames);
  };

  public destroy = async (req: Request, res: Response<TFrame | null>) => {
    const result = await this._service.destroy(req.params.id);
    return res.status(200).json(result);
  };
}
