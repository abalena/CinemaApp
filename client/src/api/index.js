import axios from "axios";

import { apiPrefix } from '../../../etc/config.json';

export default {
  listOfFilms(){
    return axios.get(`${apiPrefix}/films`);
  },
  addFilm(data){
    return axios.post(`${apiPrefix}/films`, data);
  },
  deleteFilm(filmId){
    return axios.delete(`${apiPrefix}/films/${filmId}`);
  },
  searchFilm(data){
    return axios.post(`${apiPrefix}/films/search`, data);
  },
  uploadFile(data){
    return axios.post(`${apiPrefix}/films/upload`, data)
  }
}
