<script setup lang="ts"></script>

<template>
  <div class="skeleton"></div>
</template>

<style scoped>
@keyframes skeleton-animation {
  0% {
    right: 100%;
  }

  50% {
    right: -128px;
  }

  100% {
    right: 100%;
  }
}

.skeleton {
  overflow: hidden;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 128px 200px;
  grid-gap: 8px;
  position: relative;
  margin-bottom: 16px;
  background-color: rgb(68, 68, 68);
}

.skeleton:before {
  display: block;
  position: absolute;
  width: 500px;
  height: 100%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgb(87, 87, 87), rgba(255, 255, 255, 0));
  content: "";
  animation: skeleton-animation 1.25s infinite;
}
</style>
