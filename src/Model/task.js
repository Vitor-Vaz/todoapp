let Task = [
    {
        id: 1,
        name: "Ir no mercado",
        prioridade: 2,
        tempo_gasto: 1,

    },

    {
        id: 2,
        name: "levar o zezinho pra passear",
        prioridade: 3,
        tempo_gasto: 0.3,

    }

];

module.exports = {
    get(){
        return Task;
    },

    update(newTask){
        Task = newTask;
    },

    delete(id){
        
        Task = Task.filter(task => Number(task.id) !== Number(id))

        
    }
}