//Load any required libraries or modules
const express = require ('express');

//Declare tunables (things that can be tuned/changed)
const PORT = 3000;

//Create an express application (this will create an instance of the express application)
const app = express();

//Define routes
app.use(express.static(__dirname + '/public'))


//Start the server, listen on port 3000
app.listen(PORT,() => {
    console.info(`Application started on port ${PORT} at ${new Date()}`);
    console.info(`__dirname = ${__dirname}`)
})
