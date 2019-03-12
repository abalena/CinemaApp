import mongoose from 'mongoose';
import '../models/film';
import config from '../../etc/config.json';

const Film = mongoose.model('Film');

function setUpConnection(){
  mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}
setUpConnection();

export function listOfFilms(){
    return Film.find().sort({title: 1});
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

export function searchFilm(data){
  return Film.find({$or: [{title: data.search}, {stars: data.search}]}).sort({title: 1});
}
