const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;
// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes

// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

app.post("/postData", async (req, res) => {
    // let {date, temp, feeling} = req.body;

    try {
        projectData = req.body;
        res.end()
    } catch (error) {
        res.status(400).json({ Message: "error", error });
    }

});

app.get("/getData", async (req, res) => {
    try {
        res.status(200).json({ Message: "Success", projectData });

    } catch (error) {
        res.status(400).json({ Message: "error", error });

    }
})

// Setup Server
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})