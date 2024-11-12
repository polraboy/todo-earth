<template>
  <div class="text-center">
    <div class="text-6xl py-5">TODO</div>
    <div class="">
      <FormComponent />
    </div>
    <div>
      <ListComponent :data="todos" />
    </div>
  </div>
</template>

<script>
import FormComponent from "@/components/FormComponent.vue";
import ListComponent from "@/components/ListComponent.vue";
import { mapState } from "vuex";

export default {
  components: {
    FormComponent,
    ListComponent,
  },
  computed: {
    ...mapState({
      todos: (state) => state.todos.todos,
    }),
  },
  async mounted() {
    await this.$store.dispatch("todos/getTodo");
  },
};
</script>
