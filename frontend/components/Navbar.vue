<template>
  <nav class="navbar navbar-light navbar-expand-sm">
    <nuxt-link class="navbar-brand" to="/">
      <img class="navbar__logo" src="./../static/icon.png" alt="">
    </nuxt-link>

    <ul class="navbar-nav">
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/">
          Inicio
        </nuxt-link>
      </li>
    </ul>

    <ul class="navbar-nav">
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/dashboard">
          Tarefas
        </nuxt-link>
      </li>
    </ul>

    <ul class="navbar-nav navbar-right">
      <li class="nav-item active">
        <a @click="logout" class="nav-link" href="#">
          Sair
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout()
    }
  }
}
</script>

<style lang="scss">
@import '~assets/sass/vars';

.navbar {
  background: $translucid-color ;

  &__logo {
    width: 35px;
  }
}
</style>