// Express requirements
import axios from 'axios';
import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import Loadable from 'react-loadable';
import cookieParser from 'cookie-parser';
require('dotenv').config();


// Our loader - this basically acts as the entry point for each page load
import loader from './loader';

// Create our express app using the port optionally specified
const app = express();
const PORT = process.env.PORT || 3000;



// Compress, parse, log, and raid the cookie jar
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cookieParser());

// Set up homepage, static assets, and capture everything else
app.use(express.Router()
    .post('/register',async(req,res)=>{
      // const url = 'https://docs.google.com/forms/d/e/1FAIpQLSe3kqe7zS_4fK1hLlEA4XljQ-8EGBNPjJ8uOPr3bomXU0w0Pw/formResponsex';
      // axios({
      //   method: 'post',
      //   url,
      //   withCredentials: true,
      //   data: {'entry.564309517': 'no way'},
      //   headers: {
      //     "Content-Type": "application/x-www-form-urlencoded",
      //     "Cache-Control": "no-cache",
      //   }
      // });
      console.log(56789);
      const url = 'https://docs.google.com/forms/d/e/1FAIpQLSe3kqe7zS_4fK1hLlEA4XljQ-8EGBNPjJ8uOPr3bomXU0w0Pw/formResponse';
      axios.post(
          url,
          JSON.stringify({'entry.564309517': 'sssdt'}),
          {headers: {'Content-type': 'application/x-www-form-urlencoded'}}
      );
      res.send('ok')
    })
    .get('/logo', (req,res)=>{
      res.sendFile(path.resolve(__dirname, '../public/logo.png'))
    })
    .get('/og-logo', (req,res)=>{
      res.sendFile(path.resolve(__dirname, '../public/logo.jpg'))
    })
    .get('/', loader));
app.use(express.static(path.resolve(__dirname, '../build')));
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(loader);

// We tell React Loadable to load all required assets and start listening - ROCK AND ROLL!
Loadable.preloadAll().then(() => {
  app.listen(PORT, console.log(`App listening on port ${PORT}!`));
});

// Handle the bugs somehow
app.on('error', error => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof PORT === 'string' ? 'Pipe ' + PORT : 'Port ' + PORT;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
});
