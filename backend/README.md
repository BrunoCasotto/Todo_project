# ToDo Backend project

## Authentication
The authentication for this project is based on email and password, which, upon login, returns a token valid for 1 day. The routes to manipulate tasks require this token in the Authorization header.

## Tasks
The APIs for manipulating each user's tasks require the token generated during user authentication. With this token in the Authorization header, we obtain the userId, allowing us to retrieve from the database the tasks associated with the user making the request.<br>
Tasks are composed only of a title and description, as this is a project with the minimum viable product for production.

## Getting Started
To start the project environment, you just need to have a MongoDB database running. You can use Docker containers for this application, and all configurations are available in the <b>docker-compose.yml</b> file. <br>
<b>Environment variables:</b> <br>

| Variable         | Default Value                     | Description                            |
|------------------|-----------------------------------|----------------------------------------|
| DB_USER          | 'root'                            | Database user                          |
| DB_PASSWORD      | 'root'                            | Database user password                 |
| DB_HOST          | 'localhost:27017'                 | Database host and port                 |
| DB_DATABASE      | 'todo_db'                         | Database name                          |
| APP_SECRET       | 'deok03939039kdmk09393kdkkldk920202' | Secret key for generating tokens    |
| MAILER_HOST      | 'smtp.gmail.com'                  | SMTP service host for email sending    |
| MAILER_PORT      | 587                               | Default port for SMTP host             |
| MAILER_USER      | 'youremail@gmail.com'             | SMTP service user/email                |
| MAILER_PASS      | 'password'                        | SMTP service user/email password       |


### Api: <br>
| Endpoint                      | HTTP Method | Module | Description                                      | Details                                      |
|-------------------------------|-------------|--------|--------------------------------------------------|----------------------------------------------|
| `/auth/register`              | POST        | auth   | Route for registering new users                  | [Details](#registration-payload)             |
| `/auth/authenticate`          | POST        | auth   | Route for user authentication                    | [Details](#authentication-payload)          |
| `/auth/forgot_password`       | POST        | auth   | Route for sending password recovery email        | [Details](#password-recovery-payload)       |
| `/auth/reset_password`        | POST        | auth   | Route for resetting the password with the token  | [Details](#password-reset-payload)          |
| `/task/all`                   | GET         | task   | Route to get all user tasks                      | [Details](#response-all-tasks)              |
| `/task/save`                  | POST        | task   | Route to save a new task                         | [Details](#save-tasks-payload)              |
| `/task/remove/:taskId`        | DELETE      | task   | Route to delete a task                           | [Details](#delete-tasks-payload)            |
| `/task/update/:taskId`        | PUT         | task   | Route to update a task                           | [Details](#update-tasks-payload)            |
<br>

### Signup example payload
 ```
{
	name: 'Jon doe',
	email: 'jon.doe@email.com',
	password: 'jonDoePass'
}
```

### auth payload
```
{
	"email": "jon.doe@email.com",
	"password": "jonDoePass"
}
```

### password recovery payload
```
{
	"email": "jon.doe@email.com"
}
```

### password reset payload
```
{
	"token": "b9b17c51356c40af10c3ba6d82609f8e1f9c1930",
	"email": "jon.doe@email.com",
	"password": "newPassword"
}
```

### all tasks response

```
{
  "tasks": {
    "_id": "356c40af10c3ba",
    "title": "Task title",
    "description": "Description of task..."
  }
}
```

### save task payload

```
{
  "title": "Task title",
  "description": "Description of task..."
}
```

### edit tasks payload
```
{
  "title": "Task title", //novo título
  "description": "Description of task..." //nova descricao
}
```
