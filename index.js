// FileName: index.js

// Import express
const { Router } = require('express');
let express = require('express')

// Initialize the app
let app = express();
let apiRoutes = require("./api-routes")
// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL 
app.get('/', (req, res) => res.send(
    'Hello World with Express'
));

app.get('/about', (req, res) => res.send(
    'This is About'
));

app.get('/profle', (req, res) => res.send(
    'This is Profile'
));



// Launch app to listen to sprecified port
app.listen(port, function () {
    console.log(
        "Running RestHub on port " + port
    )
});

app.use('/api', apiRoutes)
