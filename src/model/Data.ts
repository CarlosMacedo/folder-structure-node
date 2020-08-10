import mongoose from 'mongoose';
import { dataSchema } from './schemas';

export const Data = mongoose.model('Data', dataSchema);
