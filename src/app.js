const express = require('express');
const app = express();
const port = 3333;
const controllerUserFunction = require('./controller/UserController')
const controllerToDoFunction = require('./controller/TaskController')
const bodyParser = require('body-parser');
const bd = require('./infra/bd');




app.use(bodyParser.json());

app.use(express.json());

controllerUserFunction(app, bd.users);
controllerToDoFunction(app, bd.tasks);


app.listen(port, console.log("tá funfandoooooo"));


