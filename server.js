import http from 'http';
import app from './app/app.js';
import './config/dbConnect.js'



const PORT = process.env.PORT || 5000;

const server = http.createServer(app)

server.listen(PORT, console.log(`Server running on port: ${PORT}`))