<template>
  <div class="home-page">
    <div class="home-page__content text-center">
      <div
        class="home-page__content__overlay"
        @click="closeTaskEdit"
        v-if="taskEditId"
      />

      <h4 class="mb-4">
        Minhas tarefas
      </h4>

      <div class="task-list">
        <template v-for="task in tasks">
          <div
            :key="task._id"
            class="task-list__item small shadow"
            :class="task._id === taskEditId ? 'task-list__item--active' : ''"
            @click="openTaskEdit(task._id)"
          >
            <Task
              :task="task"
            />
          </div>
        </template>
      </div>

    </div>
  </div>
</template>

<script>
import { getAllTasks } from '~/assets/js/services/tasks'
import Task from '~/components/Task'

export default {
  components: {
    Task,
  },
  data() {
    return {
      tasks: [],
      taskEditId: null
    }
  },
  mounted() {
    this.fetchTasks()
  },
  methods: {
    async fetchTasks() {
      const { tasks } = await getAllTasks(this.$axios)
      this.tasks = tasks
    },
    openTaskEdit(id) {
      this.taskEditId = id
    },
    closeTaskEdit() {
      this.taskEditId = null
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
  position: relative;

  &__item {
    border-radius: 8px;
    background: white;
    cursor: pointer;
    flex: 1;
    margin: 10px;
    padding: 10px;
    min-width: 230px;

    &--active {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      max-width: 500px;
      min-height: 200px;
      padding: 20px;
      z-index: 6;
      cursor: default;
    }
  }
}

 .home-page {
   width: 100%;

   &__content {
    padding: 20px;
    background: $translucid-color;
    border-radius: 8px;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;

    &__overlay {
      width: 100%;
      height: 100%;
      background: #000;
      opacity: .8;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 5;
    }
   }
 }
</style>
