import mongoose from 'mongoose';
import '../models/film';

const Film = mongoose.model('Film');

export function listOfFilms(){
  return Film.find();
}

export function addFilm(data){
  const film = new Film({
    title: data.title,
    year: data.year,
    format: data.format,
    stars: data.stars
  })
  return film.save();
}

export function deleteFilm(id){
  return Film.findById(id).remove();
}
