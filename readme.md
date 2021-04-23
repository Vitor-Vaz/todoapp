## To Do API
---

📝 Api de uma aplicação que permite o CRUD de tarefas e usuarios.

---

 ## 📌 Como instalar? 

- Faça o fork do projeto em seu computador.
- Rode o comando "npm install" no terminal do VSCode e ele irá baixar.todas as dependencias necessarias para que a API rode sem intercorrencias.
- Após isso, a porta na qual o servidor está configurada no arquivo "app.js" pela porta 3333, caso queira mudar, é só mudar a variavel port da linha 3.
- Rode o comando "npm start" no console e o servidor ficará ligado e pronto para utilizar as CRUD's.

<br>
<br>


<strong><p style="text-align: center; font-size: 1.5rem; ">  🛣️Rotas disponiveis </p> </strong>

- listar todos os usuarios:



``` js
GET: http://localhost:3333/user 
// resultado
[
  {
    "id": 1,
    "name": "Eugenio Oliveira",
    "email": "eugenio.oliveira@bol.com.br",
    "password": '*******'
  },
  {
    "id": 6,
    "name": "Vitor Vaz",
    "email": "vitor.vaz@bol.com.br",
    "password": '*******'
  },
]
```

- listar um usuario pelo id:



``` js
GET: http://localhost:3333/user/:id 
// resultado
  {
    "id": 1,
    "name": "Eugenio Oliveira",
    "email": "eugenio.oliveira@bol.com.br",
    "password": '*******'
  }

```

- Deletando um usuario pelo id:



``` js
DELETE: http://localhost:3333/user/delete/:id
```

- Editando um usuario pelo id:



``` js
PUT: http://localhost:3333/user/update/:id
```


- Criando um usuario:



``` js
POST: http://localhost:3333/user/create
```


- listar todas as tarefas:



``` js
GET: http://localhost:3333/task 
// resultado
[
  {
    "id": 1,
    "title": "Yoga",
    "description": "Fazer yoga segunda e quarta",
    "status": "Continuo",
    "date_creation": "2021-01-10",
    "id_user": 2
  },
  {
    "id": 2,
    "title": "Médico",
    "description": "Consulta com Dr. Ayrton sexta",
    "status": "TODO",
    "date_creation": "2021-01-13",
    "id_user": 1
  },
]
```

- listar uma tarefa pelo id:



``` js
GET: http://localhost:3333/task/:id
// resultado
{
  "id": 8,
  "title": "Yoga",
  "description": "Fazer yoga segunda e quarta",
  "status": "Continuo",
  "date_creation": "2021-01-10",
  "id_user": 1
}

```

- Deletando uma tarefa pelo id:



``` js
DELETE: http://localhost:3333/task/delete/:id
```

- Editando uma tarefa pelo id:



``` js
PUT: http://localhost:3333/task/update/:id
```


- Criando uma tarefa:



``` js
POST: http://localhost:3333/task
```



