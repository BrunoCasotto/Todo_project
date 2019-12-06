<template>
  <div class="home-page">
    <div class="home-page__content text-center">
      <div
        class="home-page__content__overlay"
        @click="closeForms"
        v-if="taskEditId"
      />

      <div
        class="home-page__task-form small shadow"
        v-if="newTaskForm"
      >
        <a
          @click="closeForms"
          href="#"
          class="home-page__task-form__close fa fa-close"
        />
        <TaskForm
          v-if="newTaskForm"
          :createForm="true"
          :saveTask="createTask"
        />
      </div>

      <h4 class="mb-4">
        Minhas tarefas
      </h4>

      <button
        @click="openNewTaskForm"
        class="btn__add btn btn-primary fa fa-plus"
      />

      <div class="task-list">
        <template v-for="task in tasks">
          <div
            :key="task._id"
            class="task-list__item small shadow"
            :class="task._id === taskEditId ? 'task-list__item--active' : ''"
            @click="openTaskEdit(task._id)"
          >
            <TaskForm
              v-if="task._id === taskEditId"
              :task="task"
              :deleteTask="deleteTask"
              :saveTask="saveTask"
            />
            <Task
              v-else
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
import TaskForm from '~/components/TaskForm'

export default {
  components: {
    Task,
    TaskForm,
  },
  data() {
    return {
      tasks: [],
      taskEditId: null,
      newTaskForm: false
    }
  },
  mounted() {
    this.fetchTasks()
  },
  methods: {
    async deleteTask(id) {
      console.log('remove', id)
    },
    async saveTask(id) {
      console.log('save', id)
    },
    async createTask(task) {
      console.log('create', task)
    },
    async fetchTasks() {
      const { tasks } = await getAllTasks(this.$axios)
      this.tasks = tasks
    },
    closeForms() {
      this.closeNewTaskForm()
      this.closeTaskEdit()
    },
    openTaskEdit(id) {
      this.taskEditId = id
      this.newTaskForm = false
    },
    closeTaskEdit() {
      this.taskEditId = null
    },
    openNewTaskForm() {
      this.newTaskForm = true
      this.taskEditId = null
    },
    closeNewTaskForm() {
      this.newTaskForm = false
    }
  }
}
</script>

<style lang="scss">
@import '~assets/sass/vars';
.btn__add {
  position: absolute;
  top: 15px;
  right: 15px;
}

.home-page__task-form {
  max-width: 500px;
  width: 100%;
  margin: 40px auto 30px;
  border-radius: 8px;
  background: white;
  padding: 20px;
  position: relative;
  padding-top: 40px;

  &__close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    &:hover,
    &:focus,
    &:visited {
      text-decoration: none;
    }
  }
}

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
      margin: 0;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% - 20px);
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
