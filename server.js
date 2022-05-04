// imports
import express from 'express';
import { MongoClient } from 'mongodb';
import users from './routes/api/users.js';
import profile from './routes/api/profile.js';
import posts from './routes/api/posts.js';


const app = express();

// DB connection
import { mongoURI as db } from './config/keys.js';
const client = new MongoClient(db);

// //connect to mongo DB
// client
//     .connect()
//     .then(() => console.log('Connected to mongo DB'))
//     .catch((err) => console.log(err));


app.get('/', (req, res) => { res.send('Hello world') });

// define Routes for API's
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);



//server configuration
const port = process.env.PORT || 5000;
app.listen(port, (req, res) => console.log(`server listening on ${port}`));
