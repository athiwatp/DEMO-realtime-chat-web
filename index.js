const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', socket => {
  console.log('a user connected')
})

io.on('connection', socket => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg)
  })
})

server.listen(4000, () => {
  console.log('The server is running: http://localhost:4000')
})