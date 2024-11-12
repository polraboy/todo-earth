<template>
  <div>
    <ul>
      <li v-if="this?.data?.length === 0">No Data Available</li>
      <li
        class="cursor-pointer hover:text-gray-400"
        v-else
        v-for="todo in this.data"
        :key="todo?.id"
        @click="this.deleteTodo(todo.id)"
      >
        ID:{{ todo.id }} {{ todo.todo }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },

  methods: {
    async deleteTodo(id) {
      await this.$store.dispatch("todos/deleteTodo", id);
    },
  },
  mounted() {
    console.log(this.data);
  },
};
</script>
