<template>
  <div class="task">
    <h5>{{ task.title }}</h5>
    <p>{{ task.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      default: () => ({})
    },
  }
}
</script>

<style>

</style>