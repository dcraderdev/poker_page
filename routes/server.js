const express = require('express');
const dotenv = require('dotenv');
var cors = require('cors');
const http = require('http');
const socketIO = require('socket.io');
const connectDB = require('./config/db');
const {notFound, errorHandler} = require('./middleware/error');
dotenv.config();
// initialize express server
const app = express();

// initialize http server
const httpServer = http.createServer(app);

// initialize socket server to handle API requests and socket requests
const socketServer = socketIO(httpServer, {
  cors: {
    origin: '*'
}
})

app.use(cors({ origin: true, credentials: true }));

app.use(express.json({extended:false}));

app.use('/ap1/users',userRoutes);

app.use(notFound);

app.use(errorHandler);

const port = process.env.PORT || 5000;

httpServer.listen(port, console.log(`Server is running on port ${port}`);)



