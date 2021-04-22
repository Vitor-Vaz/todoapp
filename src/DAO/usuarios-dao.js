class UsuariosDAO {

    constructor(bd) {
        this.bd = bd;
    }


    async listAllUsers() {

        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM Users`,
                (err, users) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(users)
                    }
                }
            )
        })
    }

    putUser(user) {

        return new Promise((resolve, reject) => {
            this.bd.run(`INSERT INTO Users (name, email, password) VALUES ( ?, ?, ?)`, user.name, user.email, user.password,
                (err, usuario) => {
                    if (err) {
                        reject("não foi possivel inserir dados");
                    } else {
                        resolve("dados inseridos com sucesso");
                    }
                }
            )
        })
    }

    listUserById(id) {

        return new Promise((resolve, reject) => {

            console.log(id);

            this.bd.get(`SELECT * FROM Users WHERE id = ?`, id,
                (err, user) => {
                    if (err) {
                        reject(`não foi possivel inserir dados: ${err}`);
                    } else {

                        resolve(user);
                    }
                }
            )
        })
    }


    deleteUser(id) {

        return new Promise((resolve, reject) => {
            this.bd.run(`DELETE FROM Users WHERE id = ?`, id,
                (err) => {
                    if (err) {
                        reject(`não foi possivel deletar dados: ${err}`);
                    } else {
                        resolve("Usuario deletado com sucesso");
                    }
                }
            )
        })
    }

    updateUser(user, id) {

        return new Promise((resolve, reject) => {
            this.bd.run(`UPDATE Users SET name = ?, email = ?, password = ? WHERE id = ?`, user.name, user.email, user.password, id,
                (err) => {
                    if (err) {
                        reject(`não foi possivel atualizar dados: ${err}`);
                    } else {
                        resolve("Usuario atualizado com sucesso!");
                    }
                }
            )
        })
    }
}


module.exports = UsuariosDAO;