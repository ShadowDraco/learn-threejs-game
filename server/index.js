// do environment variables first to make sure its there
require('dotenv').config()
const PORT = process.env.PORT

// create express ap[]
const express = require('express')
const app = express()
// create websocket capabilities for app
const http = require('http')
const server = http.createServer(app)
// turn app into a socket.io server
const { Server } = require('socket.io')
const io = new Server(server, {
  cors: {
    origin: `http://localhost:5173`,
  },
})

const cors = require('cors')

app.use(cors)
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send('Hello!')
})

const { testHandler } = require('./socketHandlers')

io.on('connection', socket => {
  socket.emit('TEST', 'Hello from the server!')
  console.log('a user connected')

  socket.on('TEST', testHandler)

  socket.onAny((event, payload) => {
    console.log('EVENT:', event)
  })
})

server.listen(PORT, () => {
  console.log('listening on *:', PORT)
})
