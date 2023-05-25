import express from 'express';
import { engine } from 'express-handlebars';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import subjectsRouter from './routes/subjects.js';
import departmentsRoutes from './routes/departmentsRoutes.js';
import authroutes  from './routes/auth.js';
import  welcomeform  from './routes/first.js';
import methodOverride  from 'method-override';
import cookieParser from 'cookie-parser';
import {authentication} from './middleware/authentication.js';
dotenv.config();

mongoose.connect(process.env.mongCoonnectionUrl)

const app = express();

app.use(cookieParser());
app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

app.use('/', authroutes);
app.use('/', welcomeform);

app.use('/subjects' , authentication  , subjectsRouter );
app.use('/departments', authentication ,departmentsRoutes);

  

app.listen(process.env.PORT, () => {
    console.log(`Statted The App on http://localhost:${process.env.PORT}`)
});