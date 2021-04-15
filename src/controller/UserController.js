const User = require('../Model/user');
const UsuariosDAO = require('../DAO/usuarios-dao');

function controllerUserFunction(app, bd){

    const usuarioDAO = new UsuariosDAO(bd);

    app.get('/user',(req,res)=>{

        usuarioDAO.listAllUsers()
        .then((users) => { res.send(users)})
        .catch((err) => res.send( 
            { mesagem: "Falha ao listar usuarios"+err}
        ))


    })

    app.post('/user/create', (req, res) => {

        const body = req.body;

        let user = new User(body.id, body.name, body.email, body.password);

        usuarioDAO.putUser(user)
        .then((mensagemSucesso) => res.send( {mensagem: mensagemSucesso}))
        .catch((mensagemFalha) => res.send( {mensagem: mensagemFalha}))

        

    })

    app.get('/user/:id', (req, res) => {


        const id = req.params.id;
    


        usuarioDAO.listUserById(id)
        .then((user) => { res.send(user) } )
        .catch((mensagemFalha) => res.send( {mensagem: mensagemFalha}))


    })

    app.delete('/user/delete/:id', (req, res) =>{


        const id = req.params.id;

        usuarioDAO.deleteUser(id)
        .then((mensagemSucesso) => res.send( {mensagem: mensagemSucesso}))
        .catch((mensagemFalha) => res.send( {mensagem: mensagemFalha}))



    })

    app.put('/user/update/:id', (req, res) => {
        
        const id = req.params.id;
        
        const body = req.body;

        let user = new User(0, body.name, body.email, body.password);

        usuarioDAO.updateUser(user, id)
        .then((mensagemSucesso) => res.send( {mensagem: mensagemSucesso}))
        .catch((mensagemFalha) => res.send( {mensagem: mensagemFalha}))

        

    })


}

module.exports = controllerUserFunction;




