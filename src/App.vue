<script setup lang="ts">
import { defineAsyncLazyComponent } from "./defineAsyncLazyComponent";
import Loading from "./components/Loading.vue";

const Card = defineAsyncLazyComponent({
  loader: () => import("./components/Card.vue"),
  loadingComponent: Loading,
  loadingComponentOptions: {
    style: {
      height: "55vh",
      marginTop: "2rem",
    },
  },
});

const Card1 = defineAsyncLazyComponent({
  loader: () => import("./components/Card-1.vue"),
  loadingComponent: Loading,
  loadingComponentOptions: {
    style: {
      height: "55vh",
      marginTop: "2rem",
    },
  },
});
</script>

<template>
  <div class="container">
    <div v-for="i of 2" :key="i" class="card-example"></div>
    <Card />
    <div class="card-example"></div>
    <Card1 color="blue" />
    <div class="card-example"></div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

.container {
  background-color: rgb(247, 247, 247);
  min-height: 100vh;
  padding: 1rem 2rem;
}

.card-example {
  height: 60vh;
  margin-top: 2rem;
  border-radius: 10px;
  background-color: rgb(226, 226, 226);
}
</style>
