import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from './etc/config.json';
import * as db from './utils/DataBaseUtils.js';
import * as fileUtil from './utils/FileUtils.js'
import cors from 'cors';
import multer from 'multer';


const app = express();
const upload = multer({ dest: './uploads/' });

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
    })
    .catch(err => {
      res.send(err)
    });
});
app.post('/films/search', (req, res) => {
  db.searchFilm(req.body).then(data => {
    res.send(data);
  })
  .catch(err => {
    res.send(err)
  });
});
app.post('/films/upload', upload.single('file'), (req, res) => {
  if(req.file != null){
    const fileData = fileUtil.readAndDelFile(req.file.path, 'utf8');
    fileUtil.parseAndLoadData(fileData);
    res.send('Done')
  }else{
    res.send('No file');
  }
});
app.delete('/films/:id', (req, res) => {
  db.deleteFilm(req.params.id).then(data => {
    res.send(data);
  })
  .catch(err => {
    res.send(err)
  });
});

app.listen(config.serverPort, () => console.log('Listening on port ' + config.serverPort))
