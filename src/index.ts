import http from 'http';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import i18n from 'i18n';
import path from 'path';
import routes from './routes';

dotenv.config();
const { PORT } = process.env;

const app = express();

// i18n configure
i18n.configure({
  locales: ['mn', 'en'],
  defaultLocale: 'en',
  directory: path.join(__dirname, '/locales'),
  updateFiles: false,
  objectNotation: true
});

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(i18n.init);

// Routes
app.use(routes);

const server = http.createServer(app);

server.listen(PORT, async () => {
  console.log(`Listening on port for ${PORT}`);
});
