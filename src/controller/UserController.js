const User = require('../Model/user');
const UsuariosDAO = require('../DAO/usuarios-dao');

function controllerUserFunction(app, bd) {

    const usuarioDAO = new UsuariosDAO(bd);

    app.get('/user', async (req, res) => {

        try {
            const users = await usuarioDAO.listAllUsers();
       
            res.send(users);
        } catch (e) {
            res.send(`não foi possivel localizar tabela. log do erro: ${e}`);
        }

    })

    app.post('/user/create', async (req, res) => {

        const body = req.body;

        let user = new User(body.id, body.name, body.email, body.password);
        try {
            await usuarioDAO.putUser(user);
            res.send("Usuario criado com sucesso!");
        } catch (e) {
            res.send(`não foi possivel criar usuario. log do erro: ${e}`)
        }

    })

    app.get('/user/:id', async (req, res) => {

        const id = req.params.id;

        try {
            const user = await usuarioDAO.listUserById(id)

            res.send(user)
        } catch (e) {
            res.send(`Usuario não encontrado. log do erro: ${e}`)
        }

    })




    app.delete('/user/delete/:id', async (req, res) => {

        const id = req.params.id;

        try {
            await usuarioDAO.deleteUser(id)

            res.send("Usuario deletado com sucesso")
        } catch (e) {
            res.send(`Usuario não encontrado. log do erro: ${e}`)
        }

    })

    app.put('/user/update/:id', async (req, res) => {

        const id = req.params.id;

        const body = req.body;

        let user = new User(0, body.name, body.email, body.password);

        try {
            await usuarioDAO.updateUser(user, id)

            res.send("Usuario atualizado com sucesso")
        } catch (e) {
            res.send(`Usuario não encontrado. log do erro: ${e}`)
        }
    })


}

module.exports = controllerUserFunction;




