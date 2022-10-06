const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: SocketServer } = require('socket.io');
const { formatMessage } = require('./utils/utils')

const PORT = process.env.PORT || 8080;
const app = express();
const httpServer = new HttpServer(app);
const io = new SocketServer(httpServer);

const messages = [];
const users = [];

//Middlewartes
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

/*
const messages =[
{ author: "Juan", text: "¡Hola! ¿Que tal?" },
{ author: "Pedro", text: "¡Muy bien! ¿Y vos?" },
{ author: "Ana", text: "¡Genial!" }
];

*/
//Routes
app.get("/chat", (req, res) =>{
    console.log(users);
    res.sendFile(__dirname + '/public/chat.html')
})

app.post('/login', (req, res) =>{
    const { username } = req.body;
    if (users.find( user => user.username === user)) {
       return res.send("Username already taken");
    }
    res.redirect(`/chat?username=${username}`)
});



//Listen
httpServer.listen(PORT, ()=>{
    console.log("Server is up and running on port", PORT);
});

const botName = "Shut Bot";

// Socket evets
io.on('connection', (socket) =>{
    console.log("New client connection");

    // Trayendo todos los mensajes
    socket.emit('messages', [...messages]);

   // Welcome chat
   socket.on("join-chat", (data) =>{
    const newUser = {
        id: socket.id,
        username: data.username
    };
    users.push(newUser);

    //Welcome current user
    socket.emit('chat-message', formatMessage(null, botName, `Welcome to shut up!`));
    //Broadcast connection
    socket.broadcast.emit('chat-message', formatMessage(null, botName, `${data.username} has joined to the chat`));

  });

  //New message
  socket.on("new-message", (data) => {
    const author = users.find(user => user.id === socket.id);
    const newMessage = formatMessage(socket.id, author.username, data);
    messages.push(newMessage);
    io.emit('chat-message', newMessage);
  })

});