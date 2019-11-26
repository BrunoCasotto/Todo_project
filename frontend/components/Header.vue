<template>
  <div class="header shadow">
    <img class="header__logo" src="./../static/icon.png" alt="">
    <h1 class="title header__title">Tarefas Online</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '~assets/sass/vars';

.header {
  background: $translucid-color;
  width: 100%;
  height: $header-height;
  padding: 20px;
  display: flex;
  align-items: center;

  //fix horizontal screen
  @media screen and(max-height: 320px) {
    margin-bottom: 20px;
  }

  &__title {
    font-size: $font-size-gl;
    margin: 0;
  }

  &__logo {
    width: 50px;
    margin-right: 20px;
  }
}
</style>