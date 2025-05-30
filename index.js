const dotenv = require('dotenv');
dotenv.config();
const express = require('express');


const app = express();


app.listen(process.env.PORT, (error) =>{
    if(!error)
       console.log(`App is listening to port ${process.env.PORT}`)
    else 
        console.log("Error occurred, server can't start", error)
    }
);