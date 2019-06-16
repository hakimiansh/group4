const express = require('express');
const fs= require('fs');

const app = express();

app.use(express.json()); // Middleware - for reading the BODY

app.use((request, response, next)=>{
let userID="";
let time=new Date();
let messageC="";
let messageId="";
let action="";

let line="";
const fileName="log_chat";
if(request.method==="DELETE")
{
console.log(time);
    action="REMOVE";
    userID= Number(request.query.id);
    messageId = getIndexById(chat, id);
    messageC=chat[messageId];
}

else if(request.method==="POST")
{
    action="ADD";
    userID = request.body.Author;
    messageC = request.body.Message;

}
line=`${time} ,${action},${messageId}, ${messageC},${userID} `;
    fs.appendFileSync(fileName,line);//need fix
    next();
});

const chat = [];

// Read
app.get('/', (request, response) => {
    const mess = request.query.search;
    if (mess) {
        const res = searchMess(mess);
        responseJson(response, res);
    }
    else
        responseJson(response, chat);
});

function searchMess(mess) {
    return chat.filter((message) => message.message.indexOf(mess) !== -1)
}
// Delete
app.delete('/', (request, response) => {
    const id = Number(request.query.id);
    const chatIndex = getIndexById(chat, id);
    chat.splice(chatIndex, 1);
    responseJson(response, "ok");
});

// Update
app.put('/', (request, response) => {
    const id = Number(request.query.id);
    const chatIndex = getIndexById(chat, id);
    chat[chatIndex].message = request.body.message;
    responseJson(response, "ok");
});

// Create
app.post('/', (request, response) => {
    const id = Math.floor(Math.random() * 10000);
    const author = request.body.Author;
    const message = request.body.Message;

    chat.push({
        id,
        author,
        message
    });
    responseJson(response, "ok");
});

function getIndexById(arr, id) {
    return arr.findIndex(item => item.id === id);
}

function responseJson(response, result) {
    response.json({
        result
    });
}

app.listen(8000, () => console.log("server is running in port 8000"));