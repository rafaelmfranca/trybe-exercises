import { model as mongooseCreateModel, Schema } from 'mongoose';
import TLens from '../schemas/lens';
import MongoModel from './mongo';

const lensMongooseSchema = new Schema<TLens>({
  degree: Number,
  antiGlare: Boolean,
  blueLightFilter: Boolean,
});

export default class Lens extends MongoModel<TLens> {
  constructor(model = mongooseCreateModel('Lens', lensMongooseSchema)) {
    super(model);
  }
}
