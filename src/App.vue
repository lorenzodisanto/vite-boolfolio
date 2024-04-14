<script>
import axios from "axios";
import { api, store } from "./store";

export default {
  data() {
    return {
      title: "Boolfolio Vue + Vite",
      store,
    };
  },

  created() {
    // chiamata axios al b
    axios.get(api.url + "projects").then((response) => {
      // carico i dati nello store
      store.projects = response.data.data;
    });
  },
};
</script>

<template>
  <div class="container">
    <h1>{{ title }}</h1>

    <!-- stampo lista progetti -->
    <div v-for="project in store.projects">
      <ul>
        <li>{{ project.id }}</li>
        <li>{{ project.title }}</li>
        <li>{{ project.description }}</li>
      </ul>
      <hr />
    </div>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
