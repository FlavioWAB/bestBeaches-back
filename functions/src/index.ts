import * as functions from 'firebase-functions';
import express from "express";
import BeachesController from './Controllers/BeachesController';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/beaches', BeachesController.get);

exports.api = functions.https.onRequest(app);