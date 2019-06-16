const express = require('express');
const fs= require('fs');
const zlib = require('zlib');
const { promisify } = require('util');
// SAME AS:
// const util = require('util');
// const promisify = util.promisify;

const app = express();

app.use(express.json()); // Middleware - for reading the BODY

const fileName='students.csv';


// Read
app.get('/', async (request, response) => {
try {
    const pathFile=path.join(fileName);
    console.log(pathFile);
    const result=await zip(pathFile);
    console.log(result);
    responseJson(response, result);
    
} catch (error) {
    responseJson(response,error);
}
    
});

function responseJson(response, result) {
    response.json({
        result
    });
}



const zip = (source, callback) => {
    try{
        fs.createReadStream(source) //read the stream
        .pipe(zlib.createGzip()) // zip the file
        .pipe(fs.createWriteStream(`${source}.gz`)) // create the zip file
        .on('finish', () => callback(null, {message: 'File was zipped!!!'}));
    }
    catch(ex) {
        return callback(ex);
    }
}


app.listen(8000, () => console.log("server is running in port 8000"));