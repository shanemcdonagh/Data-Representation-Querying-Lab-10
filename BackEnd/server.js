const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require('body-parser') // Configuration for parsing the body of a http request
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json
const cors = require('cors'); //Allows restricted resources on a web page to be requested from another domain
const mongoose = require('mongoose'); // Allows to connect to the mongodb database

// Connect to the mongodb server on the cloud
const connectionString = "mongodb+srv://admin:admin@cluster0.bmqla.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

// Asynchronous function
async function main() {
    // Connect to the database
   await mongoose.connect(connectionString, {useNewUrlParser: true});
}

// Log an error if one occurs when connecting to the database
main().catch(err => console.log(err));



// Specifies type of data that will be stored
const schema = mongoose.schema;
var moviesSchema = new mongoose.Schema({
    title: String,
    year: String,
    poster: String
});

// Allows to write data to the database
var movieModel = mongoose.model("movie", moviesSchema);

app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('hello world')
});

// Server listening through port 4000 - Accessed by localhost:3000 (our app)
app.listen(port, (req, res) => {
    console.log(`Listening at http://localhost:${port}`);
});

// Returns record from the database based on its id and sends a JSON response to the client
app.get('/api/movies/:id', (req,res)=>{
    console.log(req.params.id);

    movieModel.findById(req.params.id, (err,data) =>{
        res.json(data);
    });
})

// Updates record in database when put method is called from this url
app.put('/api/movies/:id', (req,res)=>{
    console.log("Updating " + req.params.id);

    movieModel.findByIdAndUpdate(req.params.id, req.body,{new: true}, 
        (err,data)=>{
            res.send(data);
        });
})

// Server receives data that was passed to /api/movies from create.js
app.post('/api/movies', (req, res) => {
    // Logs received data to the console
    console.log(req.body)
    console.log(req.body.Title)
    console.log(req.body.Year)
    console.log(req.body.Poster)
    res.send('Data received')

    // Adds user-entered movie to the database
    movieModel.create({
        title:req.body.Title,
        year:req.body.Year,
        poster:req.body.Poster
    })

    // Confirms success with a response
    res.send("Item Added");
});

//Listening through path with get method
app.get('/api/movies', (req, res) => {

     // Finds all the data within the collection
     movieModel.find((err, data)=> {
        res.json(data);
    // Create array of movies
    // const movies = [
    //     {
    //         "Title": "Avengers: Infinity War",
    //         "Year": "2018",
    //         "imdbID": "tt4154756",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    //     },
    //     {
    //         "Title": "Captain America: Civil War",
    //         "Year": "2016",
    //         "imdbID": "tt3498820",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    //     },
    //     {
    //         "Title": "World War Z",
    //         "Year": "2013",
    //         "imdbID": "tt0816711",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    //     }
    //     , {
    //         "Title": "War of the Worlds",
    //         "Year": "2005",
    //         "imdbID": "tt0407304",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
    //     }
    // ]
    
    // Respond to http request with JSON data
    // res.status(200).json({
    //     mymovies: movies,
    //     'Message': 'Hello from the server'
    // });
    
})
});