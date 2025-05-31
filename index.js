import bodyParser from 'body-parser';
import 'dotenv/config';
import express from 'express';
import OpenAI from 'openai';



const app = express();

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }));

const openai = new OpenAI({
    apiKey: process.env.API_KEY
})

app.listen(process.env.PORT, (error) =>{
    if(!error)
       console.log(`App is listening to port ${process.env.PORT}`)
    else 
        console.log("Error occurred, server can't start", error)
    }
);