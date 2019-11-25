# ToDo Backend project

## Autenticação
A autenticação desse projeto é baseada em email e senha, que no momento do login retorna um token válido por 1 dia. As rotas para manipular as tarefas necessitam desse token dentro do Authorization do header.

## Tarefas
As apis para manipular as tarefas de cada usuário necessitam do token gerado pela autenticacão do usuário. Com ele dentro do Authorizadion to header obtemos o userId, dessa forma podemos buscar na base de dados as tarefas associadas ao usuário responsável pela requisicão.<br>
As tarefas são compostas apenas por título e descricão por se tratar de um projeto com o mínimo viavel para produção.

### Rotas da api: <br>
| Rota | método | módulo | descrição | payload |
|---|---|-----|---|---|
|```/auth/register```|POST|auth|Rota para cadastro de novos usuários|[detalhes](#payload-de-registro) |
|```/auth/authenticate```|POST| auth|Rota para autenticação de usuários |[detalhes](#payload-de-autenticação) |
|```/auth/forgot_password```|POST|auth|Rota para envio de email de recuperação |[detalhes](#payload-recuperação-de-senha) |
|```/auth/reset_password```|POST|auth|Rota para resetar a senha com o token enviado |[detalhes](#payload-reset-de-senha) |
|```/task/all```|GET|task|Rota para obter todas as tarefas do usuario |[detalhes](#response-todas-tarefas) |
|```/task/save```|POST|task|Rota para salvar uma nova tarefa |[detalhes](#payload-salvar-tarefas) |
|```/task/remove/:taskId```|DELETE|task|Rota para deletar uma tarefa |[detalhes](#payload-deletar-tarefas) |
|```/task/update/:taskId```|PUT|task|Rota para alterar uma tarefa |[detalhes](#payload-alterar-tarefas) |

<br>

### payload de registro
 ```
{
	name: 'Jon doe',
	email: 'jon.doe@email.com',
	password: 'jonDoePass'
}
```

### payload de autenticação
```
{
	"email": "jon.doe@email.com",
	"password": "jonDoePass"
}
```

### payload recuperação de senha
```
{
	"email": "jon.doe@email.com"
}
```

### payload reset de senha
```
{
	"token": "b9b17c51356c40af10c3ba6d82609f8e1f9c1930",
	"email": "jon.doe@email.com",
	"password": "newPassword"
}
```

### response todas tarefas

```
{
  "tasks": {
    "_id": "356c40af10c3ba",
    "title": "Task title",
    "description": "Description of task..."
  }
}
```

### payload salvar tarefas

```
{
  "title": "Task title",
  "description": "Description of task..."
}
```

### payload salvar tarefas
Apenas colocar o id da tarefa no parametro da url.

### payload alterar tarefas
Colocar o id da tarefa no parametro da url.
```
{
  "title": "Task title", //novo título
  "description": "Description of task..." //nova descricao
}
```

Projeto com propósito de estudo. :nerd_face:
