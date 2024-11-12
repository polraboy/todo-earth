<template>
  <div class="inline-flex">
    <form @submit.prevent="addTodo">
      <input type="text" name="" id="" v-model="todo" />
      <button class="px-5 bg-white border hover:bg-gray-400 h-full">+</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    async addTodo() {
      if (this.todo.trim()) {
        await this.$store.dispatch("todos/addTodo", {todo:this.todo});
        this.todo = "";
      }
    },
  },
};
</script>
