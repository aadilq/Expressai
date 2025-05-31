import bodyParser from 'body-parser';
import 'dotenv/config';
import express, { request } from 'express';
import OpenAI from 'openai';



const app = express();

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }));

const openai = new OpenAI({
    apiKey: process.env.API_KEY
})

app.post('/converse', async(request, response) =>{
    const message = request.body.message;
    
    const chatCompletion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{role: 'user', content: 'message'}]
    })

    response.send(chatCompletion.choices[0].message)
    console.log(chatCompletion.choices[0].message)
})

app.listen(process.env.PORT, (error) =>{
    if(!error)
       console.log(`App is listening to port ${process.env.PORT}`)
    else 
        console.log("Error occurred, server can't start", error)
    }
);