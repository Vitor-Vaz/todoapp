const Task = require('../Model/task');

function controllerToDoFunction(app, tasks) {


    app.get('/todo', (req, res) => {
        res.send(tasks);

    });


    app.post('/todo', (req, res) => {

 
        const task = new Task(req.body.id, req.body.task_name, req.body.priority, req.body.time_waste)

        tasks.push(task)

        res.send(tasks)



    })


}

module.exports = controllerToDoFunction;