import express from 'express';
import { engine } from 'express-handlebars';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


mongoose.connect(process.env.mongCoonnectionUrl)

const app = express();


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

app.listen(process.env.PORT, () => {
    console.log(`Statted The App on http://localhost:${process.env.PORT}`)
});

