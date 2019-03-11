import mongoose from 'mongoose';
import '../models/film';

const Film = mongoose.model('Film');

export function listOfFilms(){
  return Film.find().sort({title: 1});
}

export function addFilm({title, year, format, stars}){
  const film = new Film({
    title,
    year,
    format,
    stars
  })
  return film.save();
}

export function deleteFilm(id){
  return Film.findById(id).remove();
}
