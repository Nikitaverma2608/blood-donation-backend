// import { Express } from "express";
const express = require('express');

const { testController } = require("../controllers/testController");

//creating a router object so that we can access the functionalities of routing
const router = express.Router();

//creating routes
router.get('/',testController);

//exporting router
module.exports = router;
