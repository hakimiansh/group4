const express = require("express");
const cors = require('cors');
const app = express()

app.use(express.json()); // Middleware - for reading the BODY
app.use(cors());

const highScoreLst = [

]
const port = 8080;

app.get('/', (request, response) => {
    response.status(200);
    response.json({
        result: bubbleSortTopTen(highScoreLst)
    })
});
app.post('/', (request, response) => {
    //const id = Math.floor(Math.random() * 10000);
    console.log(request.body);
    const  name = request.body.name;
    const score = request.body.score;
    highScoreLst.push({name: name,grade: score})
    bubbleSortTopTen(highScoreLst)

    responseJson( response , "ok");
});


function bubbleSortTopTen(inputArr) {
    console.log(inputArr)
    return inputArr.sort((a, b) => {
        if (a.grade < b.grade) return 1;
        if (a.grade > b.grade) return -1;
        return 0;
    });

}
function responseJson(response, result) {
    response.json({
        result
    });
}

app.listen(port, () => console.log(`Server is running on port ${port}`))