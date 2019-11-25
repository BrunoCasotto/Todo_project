<template>
  <form class="form-signin">
    <h1 class="h3 mb-3 font-weight-normal">
      Entrar
    </h1>
    <label for="inputEmail" class="sr-only">Email</label>
    <input type="email" id="inputEmail" class="form-control mb-1" placeholder="Email" required="" autofocus="">
    <label for="inputPassword" class="sr-only">Senha</label>
    <input type="password" id="inputPassword" class="form-control mb-4" placeholder="Senha" required="">
    <button class="btn btn-lg btn-primary btn-block" type="submit">Entrar</button>
    <p class="mt-3 text-muted">© 2019-2020</p>
  </form>
</template>
<style>
.NuxtLogo {
  animation: 1s appear;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
