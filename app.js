const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
// })
// );


app.use(cors({ 
    credentials: true, 
    origin: 'https://super-biscotti-2284d2.netlify.app' }
    ));


// app.use(cors())

app.use(cookieParser());

dotenv.config({ path: './config.env' });

require('./db/conn');
// const User = require('./model/userSchema');

app.use(express.json());

// we link the router files to make our route easy 
app.use(require('./router/auth'));

const PORT = process.env.PORT || 5000;



//// I just comment out the below about section 
// app.get('/about', (req, res) => {
//     console.log(`Hello my About`);
//     res.send(`Hello About world from the server`);
// });

// app.get('/contact', (req, res) => {
//     // res.cookie("Test", 'thapa');
//     res.send(`Hello Contact world from the server`);

// });

// app.get('/signin', (req, res) => {
//     res.send(`Hello Login world from the server`);
// });

app.get('/signup', (req, res) => {
    res.send(`Hello Registration world from the server`);
});

app.listen(PORT, () => {
    console.log(`server is runnig at port no ${PORT}`);
})


