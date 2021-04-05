const express = require('express');
const app = express();
const port = 3333;
const controllerUserFunction = require('./controller/UserController')
const controllerToDoFunction = require('./controller/TaskController')
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.json());

controllerUserFunction(app);
controllerToDoFunction(app);


app.listen(port, console.log("tá funfandoooooo"));


