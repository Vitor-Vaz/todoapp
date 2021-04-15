const Task = require('../Model/task');
const TasksDAO = require('../DAO/tasks-dao');

function controllerTaskFunction(app, bd) {

    const Tasks = new TasksDAO(bd)

    app.get('/task', (req, res) => {
    
        Tasks.listAllTasks()
        .then((tasks) => { res.send(tasks)})
        .catch((err) => res.send( 
            { mesagem: "Falha ao listar as tarefas"}
        ))


    });


    app.post('/task', (req, res) => {

 
        const body = req.body;

        const task = new Task(0, body.title, body.description, body.status, body.date_creation);

        Tasks.putTask(task)
        .then((mensagemSucesso) => res.send( {mensagem: mensagemSucesso}))
        .catch((mensagemFalha) => res.send( {mensagem: mensagemFalha}))


    })

    app.get('/task/:id', (req, res) => {

        const id = req.params.id;

        Tasks.listTaskById(id)
        .then((task) => { res.send(task)})
        .catch((mensagemFalha) => res.send( {mensagem: mensagemFalha}))

    })

    app.delete('/task/delete/:id', (req, res) => {

        const id = req.params.id;

        Tasks.deleteTask(id)
        .then((mensagemSucesso) => res.send( {mensagem: mensagemSucesso}))
        .catch((mensagemFalha) => res.send( {mensagem: mensagemFalha}))


    })

    app.put('/task/update/:id', (req, res) => {
        
        const id = req.params.id;
        
        const body = req.body;

        let task = new Task(0, body.title, body.description, body.status, body.date_creation);

        Tasks.updateTask(task, id)
        .then((mensagemSucesso) => res.send( {mensagem: mensagemSucesso}))
        .catch((mensagemFalha) => res.send( {mensagem: mensagemFalha}))

        

    })


}

module.exports = controllerTaskFunction;