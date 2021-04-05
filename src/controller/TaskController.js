const Task = require('../Model/task');

function controllerToDoFunction(app) {

    const task = Task.get();

    app.get('/todo', (request, response) => {
        response.send(Task.get());
        console.log(task);
    });


    app.post('/todo', (request, response) => {

 
        task.push(request.body)

        response.send(Task.update(task))


        console.log(Task.get())
    })

    app.post('/todo/delete', (request, response) =>{
        const id = request.body.id;

        Task.delete(id);

        return response.send(Task.get())
    })

}

module.exports = controllerToDoFunction;