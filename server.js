const express = require('express');
const cors = require('cors');
require('dotenv').config();

const routes = require('./routes')
const port = process.env.PORT || 4000;
const app = express();

// CORS - Cross Origi Resource Sharing
app.use(cors({
    origin: [`http://localhost:3000`],
    methods: "GET,POST,PUT,DELETE",
    // credentials: true, // allows the session cookie to be sent back and forth from server to client
    optionsSuccessStatus: 200 // some legacy browsers choke on satus 204
  }));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Auth Routes
app.use('/api/v1/auth', routes.auth);
app.use('/api/v1/articles', routes.articles);
app.use('/api/v1/users', routes.users)

app.listen(port, () => console.log(`Server is running on port ${port}`));