class Task{

    constructor(id, task_name, description, status, date_creation){
        this.id = id;
        this.task_name = task_name;
        this.description = description;
        this.status = status;
        this.date_creation = date_creation;

    }
} 



module.exports = Task;