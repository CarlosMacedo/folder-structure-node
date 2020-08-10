import mongoose from 'mongoose';
import validator from 'validator';

export const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Provide a name, please.'],
    enum: {
      values: ['One', 'Two', 'Three'],
      message: 'The name must be: One, Two or Three'
    }
  },
  data: {
    type: String,
    default: 'A example of the default data.',
    validate: [validator.isAlpha, 'Data must only contain characters.']
  },
  number: {
    type: Number,
    unique: [true, 'This number has already been used.']
  },
  createAt: {
    type: Date,
    default: Date.now(),
    select: false
  },
  password: {
    type: String,
    required: [true, 'Provide a password, please.'],
    select: false
  }
});
