<template>
  <form class="form-signin" v-on:submit.prevent="signIn(email, password)">
    <h1 class="h3 mb-3 font-weight-normal text-center">
      Cadastrar
    </h1>
    <label for="inputEmail" class="sr-only">Email</label>
    <input
      v-model="email"
      type="email"
      id="inputEmail"
      class="form-control mb-1"
      placeholder="Email"
    >
    <label for="inputPassword" class="sr-only">Senha</label>
    <input
      v-model="password"
      type="password"
      id="inputPassword"
      class="form-control mb-2"
      placeholder="Senha"
    >

    <label for="inputPassword" class="sr-only">Confirmar a senha</label>
    <input
      v-model="password"
      type="password"
      id="inputPassword"
      class="form-control mb-2"
      placeholder="Confirmar a senha"
    >

    <div class="mb-2">
      <nuxt-link to="/">
        Ja sou cadastrado
      </nuxt-link>
    </div>
    <button
      class="btn btn-lg btn-primary btn-block"
      type="submit"
    >
      Cadastrar
    </button>
    <p class="mt-3 text-muted text-center">© 2019-2020</p>
  </form>
</template>
<script>
import { singIn } from './../assets/js/services/auth'

export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    signIn(email, password) {
      singIn({ email, password })
    }
  }
}
</script>

<style>
</style>
