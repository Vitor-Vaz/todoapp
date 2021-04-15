const express = require('express');
const app = express();
const port = 3333;
const controllerUserFunction = require('./controller/UserController')
const controllerTaskFunction = require('./controller/TaskController')
const bodyParser = require('body-parser');
const banco = require('./infra/sqlite-db');
const cors = require('cors');


app.use(cors());

app.use(bodyParser.json());

app.use(express.json());



controllerUserFunction(app, banco);
controllerTaskFunction(app, banco);


app.listen(port, console.log("Aplicação funcionando, acesse-a através do link: http://localhost:3333/user  para listar todos os usuarios, por exemplo!"));

