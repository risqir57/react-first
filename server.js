// part 1
// import http from 'http';
// const server = http.createServer((req, res) => {
//   res.write('Hello Http World');
//   setTimeout(() => {
//     res.write('I Can Read');
//     res.end();
//   },3000);
// });
// server.listen(8080);

import config from './config';
import express from 'express';
import apiRouter from './api';
const server = express();
server.set('view engine', 'ejs');
server.get('/', (req, res) => {
  //res.send('Hello express');
  // for ejs
  res.render('index', {
    content: "This content From ejs <em>YES</em>"
  });
});

server.get('/home.html', (req, res) => {
  res.send('Hello express in html');
});

server.use('/api', apiRouter);
// request get page with express.static where public is path of file
server.use(express.static('public'));

server.listen(config.port, () => {
  console.log('Express listening port ',config.port);
});
