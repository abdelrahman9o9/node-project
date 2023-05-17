import express from 'express';
import { engine } from 'express-handlebars';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import subjectsRouter from './routes/subjects.js';
import methodOverride  from 'method-override';

dotenv.config();


mongoose.connect(process.env.mongCoonnectionUrl)

const app = express();

app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

app.use('/subjects' ,subjectsRouter );

app.get ('/register' , (req , res) => {
    res.render('authentication/register');
});

app.get ('/login' , (req , res) => {
    res.render('authentication/login');
});

app.listen(process.env.PORT, () => {
    console.log(`Statted The App on http://localhost:${process.env.PORT}`)
});