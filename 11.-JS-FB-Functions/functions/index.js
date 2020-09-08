const functions = require('firebase-functions');
const express = require('express');

const admin = require('firebase-admin');

const app = express();
admin.initializeApp({
    credential: admin.credential.cert('./permissions.json'),
    databaseURL: 'https://fb-functions-9a7c6.firebaseio.com'
});

app.get('/hello-world', (req, res) => {
    return res.status(200).json({message: 'Hello World'})
});

app.use(require('./routes/products.routes'));

exports.app = functions.https.onRequest(app);