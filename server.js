// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

const port = 8000;

const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)});

const appData = [];



app.post('/addweather', (req, res) => {
    
    // NewEntry = {
    //     temperature: req.body.temperature,
    //     date: req.body.date,
    //     userResponse: req.body.userResponse
    // }
    // appData.push(NewEntry);
    
        projectData.temperature = req.body.temperature,
        projectData.date = req.body.date,
        projectData.userResponse = req.body.userResponse
    
    console.log(`This is all the data from our app from post/ temp ${projectData.temperature}`);
    console.log(`This is all the data from our app from post/ date ${projectData.date}`);
    console.log(`This is all the data from our app from post/ user ${projectData.userResponse}`);
});

app.get('/getweather', (req, res) => {
    console.log(`This is all the data from our app / temp ${projectData.temperature}`);
    console.log(`This is all the data from our app / date ${projectData.date}`);
    console.log(`This is all the data from our app / user ${projectData.userResponse}`);
    res.send(projectData);
});