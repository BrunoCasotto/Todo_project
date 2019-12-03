<template>
  <div class="home-page">
    <div class="home-page__content text-center">
      <h4 class="mb-4">
        Dashboard here
      </h4>

      <div class="task-list">
        <template v-for="task in tasks">
            <div :key="task._id" class="task small shadow">
              <h5>{{ task.title }}</h5>
              <p>{{ task.description }}</p>
            </div>
        </template>
      </div>

    </div>
  </div>
</template>

<script>
import { getAllTasks } from '~/assets/js/services/tasks'
export default {
  data() {
    return {
      tasks: []
    }
  },
  mounted() {
    this.fetchTasks()
  },
  methods: {
    async fetchTasks() {
      const { tasks } = await getAllTasks(this.$axios)
      this.tasks = tasks
    }
  }
}
</script>

<style lang="scss">
@import '~assets/sass/vars';

.task-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  .task {
    flex: 1;
    margin: 10px;
    padding: 10px;
    min-width: 230px;
  }
}

 .home-page {
   width: 100%;
   padding: 20px;

   &__content {
    padding: 20px;
    background: $translucid-color;
    border-radius: 8px;
    max-width: 1200px;
    margin: 0 auto;
   }
 }
</style>
