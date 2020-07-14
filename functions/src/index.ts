import * as functions from 'firebase-functions';
import express from "express";
import BeachesController from './Controllers/BeachesController';

const app = express();

app.get('/beaches', BeachesController.get);
app.post('/beaches', BeachesController.post);

exports.api = functions.https.onRequest(app);