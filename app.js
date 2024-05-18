const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
//Section
//Model Defining Section

//Routes Defining Sections


app.get("/",(req,res,next) =>{
    try{
        res.status(200).json({
            Message : "Server up and Running"
        });
    }
    catch(error){
        res.status(200).json({
            Message:error
        });
    }
    
})

module.exports = app;