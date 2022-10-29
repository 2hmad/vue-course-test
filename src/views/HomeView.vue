<template>
  <button @click="show = !show">Show</button>
  <Transition name="fade" mode="out-in">
    <p v-if="show">Hello World!</p>
  </Transition>
</template>

<script setup>
import { ref } from "vue";

const show = ref(false);
</script>
