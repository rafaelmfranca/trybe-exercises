import { model as mongooseCreateModel, Schema } from 'mongoose';
import TFrame from '../schemas/frame';
import MongoModel from './mongo';

const frameMongooseSchema = new Schema<TFrame>({
  material: String,
  color: String,
});

export default class Frame extends MongoModel<TFrame> {
  constructor(model = mongooseCreateModel('Frame', frameMongooseSchema)) {
    super(model);
  }
}
