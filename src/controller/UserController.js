const User = require('../Model/user');


function controllerUserFunction(app){

    app.get('/user',(request,response)=>{
        response.send(User.get())
    })


    app.post('/user-update',(request,response)=>{

        User.update(request.body)

        response.send(User.get());
    })


}

module.exports = controllerUserFunction;
