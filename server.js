import express from 'express';
import bodyParser from 'body-parser';
import {serverPort} from './etc/config.json'
import * as db from './utils/DataBaseUtils.js';
import cors from 'cors'

db.setUpConnection();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/films', (req, res) => {
  db.listOfFilms().then(data => {
    res.send(data);
  });
});
app.post('/films', (req, res) => {
  db.addFilm(req.body).then(data => {
    res.send(data);
  });
});
app.delete('/films/:id', (req, res) => {
  db.deleteFilm(req.params.id).then(data => {
    res.send(data);
  });
});

app.listen(serverPort, () => console.log('Listening on port ' + serverPort))
