import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const filmSchema = new Schema({
  title: {type: String, required: true},
  year: {type: String, required: true},
  format: {type: String, required: true},
  stars: {type: Array, required: true}
});

const Film = mongoose.model('Film', filmSchema);
