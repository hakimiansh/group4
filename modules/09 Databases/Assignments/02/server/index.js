const express = require('express');
const mongo = require('mongodb');

const app = express();
const port = 5000;
const dburl = 'mongodb://127.0.0.1:27017';

app.use(express.json());
const onConnect = (err, databases) => {
    if (err)
        return console.error("ERROR OCCURED:", err);


    const dbName = 'CarsDB';
    const db = databases.db(dbName);
    const collectionName = 'cars';
    const collection = db.collection(collectionName);

    app.get('/cars', (request, response) => {
        collection.find().toArray((err, data) => {
            if (err) return console.error("ERROR OCCURED:", err);

            console.log("data", data);
            response.send(data);
        })
    });
    app.get('/car', (request, response) => {

        if (request.query.contains(LicenseID)) {
            const { LicenseID } = request.query;
            collection.find({ "LicenseID": LicenseID }).toArray((err, data) => {
                if (err) return console.error("ERROR OCCURED:", err);

                console.log("data", data);

                response.send(data);
            });
        }
        else {
            next();
        }

    });


    app.get('/car', (request, response) => {
        const { startYear, endYear } = request.query;
        collection.find({ "Year": { $gt: startYear, $lt: endYear } }).toArray((err, data) => {
            if (err) return console.error("ERROR OCCURED:", err);

            console.log("data", data);
            response.send(data);
        })
    });
    app.post('/car', (request, response) => {
        const { LicenseID, Manufacturer, Model, Year, KM, Price } = request.body
        if (!LicenseID || !Manufacturer || !Model || !Year || !KM || !Price)
            responseWithStatus(500, response, "Missing Data");

        try {
            collection.insertOne({ LicenseID, Manufacturer, Model, Year, KM, Price });
            responseWithStatus(200, response, "Added successfully");
        } catch (ex) {
            responseWithStatus(500, response, ex);

        }
    });
}

function responseWithStatus(status, response, message) {
    response.status(status).send({
        message
    });
}

mongo.MongoClient.connect(dburl, onConnect);

app.listen(port, () => console.log("Server is running on port: " + port));