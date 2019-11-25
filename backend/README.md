# ToDo Backend project

## Autenticação
A autenticação desse projeto é baseada em email e senha, que no momento do login retorna um token válido por 1 dia. As rotas para manipular as tarefas necessitam desse token dentro do Authorization do header.

### Rotas da api: <br>
| Rota | modulo | descrição | payload |
|---|---|-----|---|
|```/auth/register```|auth|Rota para cadastro de novos usuários|[detalhes](#payload-de-registro) |
|```/auth/authenticate```|auth|Rota para autenticação de usuários |[detalhes](#payload-de-autenticação) |
|```/auth/forgot_password```|auth|Rota para envio de email de recuperação |[detalhes](#payload-recuperação-de-senha) |
|```/auth/reset_password```|auth|Rota para resetar a senha com o token enviado |[detalhes](#payload-reset-de-senha) |


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
