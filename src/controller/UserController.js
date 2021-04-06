const User = require('../Model/user');



function controllerUserFunction(app, users){

    app.get('/user',(req,res)=>{

        res.send(users);
    })

    app.post('/user/create', (req, res) => {

        const user = new User(req.body.id, req.body.name, req.body.avatar);

        users.push(user);

        res.send(users);

    })

}

module.exports = controllerUserFunction;
