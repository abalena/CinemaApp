import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from '../etc/config.json';
import * as db from './utils/DataBaseUtils.js';
import cors from 'cors'

function setUpConnection(){
  mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}
setUpConnection();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/films', (req, res) => {
  db.listOfFilms().then(data => {
    res.send(data);
  });
});
app.post('/films', (req, res) => {
  console.log(req.body);
  db.addFilm(req.body).then(data => {
    res.send(data);
  });
});
app.delete('/films/:id', (req, res) => {
  db.deleteFilm(req.params.id).then(data => {
    res.send(data);
  });
});

app.listen(config.serverPort, () => console.log('Listening on port ' + config.serverPort))
