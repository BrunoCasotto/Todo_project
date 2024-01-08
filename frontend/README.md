# ToDo frontend project

<p>This is a client side module for TODO project</p>

## Imagens do projeto
| | | |
|:-------------------------:|:-------------------------:|:-------------------------:|
|<img width="1604" alt="" src="https://github.com/BrunoCasotto/Todo_project/blob/master/frontend/doc/home.png">  Página inicial |  <img width="1604" alt="" src="https://github.com/BrunoCasotto/Todo_project/blob/master/frontend/doc/home.png"> Login|<img width="1604" alt="" src="https://github.com/BrunoCasotto/Todo_project/blob/master/frontend/doc/signup.png"> Cadastro|
|<img width="1604" alt="" src="https://github.com/BrunoCasotto/Todo_project/blob/master/frontend/doc/task_list.png"> Lista de tarefas |  <img width="1604" alt="" src="https://github.com/BrunoCasotto/Todo_project/blob/master/frontend/doc/add_task.png"> Formulário de tarefa|<img width="1604" alt="" src="https://github.com/BrunoCasotto/Todo_project/blob/master/frontend/doc/reset.png"> Reset de senha|

<p>Apenas algumas telas</p>

## Autenticação
The project's authentication uses a username and password, generating a token (JWT) for requests [[documentation](./../backend#Authentication)]. To implement user sessions, the [nuxt auth](https://auth.nuxtjs.org/) module was used in conjunction with [nuxt axios](https://axios.nuxtjs.org/). By integrating with our [backend](./../backend) authentication API, we obtain the token. As long as the user has a valid token, requests made to the API include the authorization token in the header.

## Integração com a API
To integrate with our backend API, a proxy was created, which is accessed from /api, taking into account the host and port where the project is running.

## Roteamento
With the use of auth middlewares, we identify which routes are accessible for an authenticated user and which ones are blocked for them. For more information, [refer to this documentation](https://auth.nuxtjs.org/guide/middleware.html).

## Estilo das páginas
For the styling, [Bootstrap 4](https://getbootstrap.com.br/docs/4.1/getting-started/introduction/) was used, along with Sass to customize styles.

## Getting started

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
