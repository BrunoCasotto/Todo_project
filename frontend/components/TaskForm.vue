<template>
  <form class="task-form" v-on:submit.prevent="">
    <div class="form-group">
      <input
        v-model="title"
        type="text"
        id="title"
        class="form-control"
        placeholder="Título"
      />
    </div>

    <div class="form-group">
      <textarea
        rows="4"
        v-model="description"
        type="textarea"
        id="title"
        class="form-control"
        placeholder="Título"
      />
    </div>

    <div class="task-form__controller row">
      <button
        @click="saveTask(task._id, title, description)"
        type="submit"
        class="col-5 mr-2 btn btn-primary"
        :class="{ 'col-12': createForm }"
        :disabled="emptyForm"
      >
        Salvar
      </button>

      <button
        v-if="!createForm"
        @click="deleteTask(task._id)"
        type="submit"
        class="col-5 btn btn-danger"
      >
        Apagar
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
    }
  },
  mounted() {''
    this.title = this.task.title || ''
    this.description = this.task.description || ''
  },
  props: {
    task: {
      type: Object,
      default: () => ({})
    },
    deleteTask: {
      type: Function,
      default: () => {},
    },
    saveTask: {
      type: Function,
      default: () => {},
    },
    createForm: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    emptyForm() {
      return !this.title.length && this.description.length
    }
  }
}
</script>

<style lang="scss">
.task-form {
  &__controller {
    margin: 0;
  }
}
</style>