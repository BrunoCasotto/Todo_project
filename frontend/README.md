# ToDo frontend project

<p>Esse projeto disponibiliza a interface gráfica web para o projeto ToDo.</p>

## Imagens do projeto
| | | |
|:-------------------------:|:-------------------------:|:-------------------------:|
|<img width="1604" alt="" src="https://github.com/BrunoCasotto/Todo_project/blob/master/frontend/doc/home.png">  Página inicial |  <img width="1604" alt="" src="https://github.com/BrunoCasotto/Todo_project/blob/master/frontend/doc/home.png"> Login|<img width="1604" alt="" src="https://github.com/BrunoCasotto/Todo_project/blob/master/frontend/doc/signup.png"> Cadastro|
|<img width="1604" alt="" src="https://github.com/BrunoCasotto/Todo_project/blob/master/frontend/doc/task_list.png"> Lista de tarefas |  <img width="1604" alt="" src="https://github.com/BrunoCasotto/Todo_project/blob/master/frontend/doc/add_task.png"> Formulário de tarefa|<img width="1604" alt="" src="https://github.com/BrunoCasotto/Todo_project/blob/master/frontend/doc/reset.png"> Reset de senha|

<p>Apenas algumas telas</p>

## Autenticação
A autenticação do projeto utiliza login e senha que gera um token (JWT) para as requisições. Para implementar a sessão do usuário foi utilizado o modulo de [nuxt auth] (https://auth.nuxtjs.org/) em conjunto com [nuxt axios] (https://axios.nuxtjs.org/). Utilizando a integracão com nossa api [backend](./../backend) de autenticacão obtemos o token, enquanto o usuário estiver com um token válido as requisições feitas para a api são encaminhadas com o authorization no header.

## Integração com a API
Para integrar nossa api backend foi feito um proxy que é acessado a partir de /api levando em consideração host e porta que o projeto estiver rodando.

## Roteamento
Com o uso dos middlewares de auth identificamos quais rotas são acessíveis a partir de um usuário autenticado e quais são bloqueadas para ele. para mais informações [ver essa doc](https://auth.nuxtjs.org/guide/middleware.html)

## Estilo das páginas
Para o estilo foi utilizado [Bootstrap 4](https://getbootstrap.com.br/docs/4.1/getting-started/introduction/), em conjunto com sass para personalizar estilos.

## Instalação

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
