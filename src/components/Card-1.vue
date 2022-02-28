<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: "red",
  },
});
</script>

<template>
  <div class="card" :style="{ backgroundColor: color }"></div>
</template>

<style scoped>
.card {
  height: 55vh;
  margin-top: 2rem;
  border-radius: 10px;
}
</style>
