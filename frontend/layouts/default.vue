<template>
  <div>
    <div class="header">
      <img class="header__logo" src="./../static/icon.png" alt="">
      <h1 class="title text-center">Tarefas</h1>
    </div>
    <div class="main">
      <nuxt />
    </div>
  </div>
</template>

<style lang="scss">
$header-height: 70px;
.header {
  width: 100%;
  height: $header-height;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  display: flex;
  margin-bottom: 20px;

  &__logo {
    width: 50px;
    margin-right: 20px;
  }
}

.main {
  width: 100%;
  min-height: calc(100vh - #{$header-height});
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
