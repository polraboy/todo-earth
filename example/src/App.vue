<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="h-screen flex flex-col">
    <!-- nav -->
    <header class="flex justify-center gap-5 py-5 bg-white">
      <RouterLink to="/" v-slot="{ isActive }">
        <div :class="['py-2 px-4 rounded-xl', isActive ? 'bg-blue-500' : 'bg-green-400']">
          Home
        </div>
      </RouterLink>
      <RouterLink to="/todos" v-slot="{ isActive }">
        <div :class="['py-2 px-4 rounded-xl', isActive ? 'bg-blue-500' : 'bg-green-400']">
          TODO
        </div>
      </RouterLink>
    </header>
    <!-- nav -->

    <!-- body -->
    <div class="bg-gray-200 flex-grow">
      <div class="max-w-[780px] mx-auto h-full">
        <RouterView />
      </div>
    </div>
    <!-- body -->
  </div>
</template>

<style scoped></style>
