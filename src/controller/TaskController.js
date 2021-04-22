const Task = require('../Model/task');
const TasksDAO = require('../DAO/tasks-dao');

function controllerTaskFunction(app, bd) {

    const Tasks = new TasksDAO(bd)

    app.get('/task', async (req, res) => {
    
        try{
            const tasks = await Tasks.listAllTasks();
            res.send(tasks);
        }  catch (e) {
            res.send(`não foi possivel localizar tabela. log do erro: ${e}`);
        }       
        



    });


    app.post('/task', async (req, res) => {

 
        const body = req.body;

        const task = new Task(0, body.title, body.description, body.status, body.date_creation);


        try{
            await Tasks.putTask(task)
            res.send('Tarefa criada com sucesso');
        }  catch (e) {
            res.send(`não foi possivel criar tarefa. log do erro: ${e}`);
        }     

    
    })

    app.get('/task/:id', async (req, res) => {

        const id = req.params.id;
        try{
            const task = await Tasks.listTaskById(id)
            res.send(task);
        }  catch (e) {
            res.send(`não foi possivel localizar tarefa. log do erro: ${e}`);
        }     

    })

    app.delete('/task/delete/:id', async (req, res) => {

        const id = req.params.id;
        try {
            await Tasks.deleteTask(id)

            res.send("tarefa deletada com sucesso")
        } catch (e) {
            res.send(`tarefa não encontrada. log do erro: ${e}`)
        }

    })

    app.put('/task/update/:id', async (req, res) => {
        
        const id = req.params.id;
        
        const body = req.body;

        let task = new Task(0, body.title, body.description, body.status, body.date_creation);

        try {
            await Tasks.updateTask(task, id)

            res.send("Tarefa atualizada com sucesso");
        } catch (e) {
            res.send(`tarefa não encontrada. log do erro: ${e}`)
        }

        

    })


}

module.exports = controllerTaskFunction;