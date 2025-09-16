import express from 'express';
import Joi from 'joi';
import logger from './middleware/logging.js';
import helmet from 'helmet';
import morgan from 'morgan';
import config from 'config';
import debug from 'debug';
import courses from './routes/courses.js';
import home from './routes/home.js';

const startupDebugger = debug('app:startup');
const dbDebugger = debug('app:db');

const app = express();

// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);


app.set('view engine', 'pug');
app.set('views', './views');
app.use('/api/courses', courses);
app.use('/', home);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log('Morgan enabled...');
    startupDebugger('Startup Debugging Enabled...');
}

dbDebugger('Database Debugging Enabled...');

app.use(logger);


console.log('Application Name: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));
console.log('Mail Password: ' + config.get('mail.password'));







const port = process.env.PORT || 2000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

