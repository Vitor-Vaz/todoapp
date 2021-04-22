class TasksDAO {

    constructor(bd) {
        this.bd = bd;
    }


    listAllTasks() {
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM Tasks`,
                (err, tasks) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(tasks)
                    }
                }
            )
        })



    }

    putTask(task) {

        return new Promise((resolve, reject) => {
            this.bd.run(`INSERT INTO Tasks (title, description, status, date_creation) VALUES ( ?, ?, ?, ?)`, task.task_name, task.description, task.status, task.date_creation,
                (err) => {
                    if (err) {
                        reject("Não foi possivel inserir dados");
                    } else {
                        resolve("dados inseridos com sucesso");
                    }
                }
            )
        })
    }

    listTaskById(id) {

        return new Promise((resolve, reject) => {
            this.bd.get(`SELECT * FROM Tasks WHERE id = ?`, id,
                (err, task) => {
                    if (err) {
                        reject(`Dados não foram encontrados: ${err}`);
                    } else {
                        resolve(task);
                    }
                }
            )
        })
    }


    deleteTask(id) {

        return new Promise((resolve, reject) => {
            this.bd.run(`DELETE FROM Tasks WHERE id = ?`, id,
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

    updateTask(task, id) {

        return new Promise((resolve, reject) => {
            this.bd.run(`UPDATE Tasks SET title = ?, description = ?, status = ?, date_creation = ? WHERE id = ?`, task.task_name, task.description, task.status, task.date_creation, id,
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


module.exports = TasksDAO;