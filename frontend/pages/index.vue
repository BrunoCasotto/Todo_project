<template>
  <div class="home-page">
    <div class="home-page__content text-center">
      <h4 class="mb-4" v-if="loggedIn">
        Bem vindo ao sistema, {{ firstName }}
      </h4>
      <template v-else>
        <h4 class="mb-4">
          Olá,
        </h4>
        <p><em>Entre ou cadastre-se para começar</em></p>
      </template>

      <nuxt-link to="/Dashboard" v-if="loggedIn" >
        Ir para tarefas
      </nuxt-link>
      <template v-else>
        <nuxt-link to="/login">
          Entrar
        </nuxt-link> |
        <nuxt-link to="/signup">
          Não sou cadastrado
        </nuxt-link>

      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  auth: false,
  computed: {
    ...mapState('auth', ['user', 'loggedIn']),
    firstName() {
      if(this.user && this.user.name) {
        return this.user.name.split(' ')[0]
      } else {
        return ''
      }
    }
  }
}
</script>

<style lang="scss">
@import '~assets/sass/vars';

 .home-page {
   width: 100%;
   padding: 20px;

   &__content {
     padding: 20px;
     background: $translucid-color;
     border-radius: 8px;
     max-width: 300px;
     margin: 0 auto;
     width: 100%;

     @media screen and(min-width: 730px) {
       min-width: 700px;
     }
   }
 }
</style>
