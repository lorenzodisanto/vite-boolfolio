<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "Boolfolio Vue + Vite",
      projects: [],
    };
  },

  created() {
    // chiamata axios al b
    axios.get("http://127.0.0.1:8000/api/projects").then((response) => {
      this.projects = response.data.data;
    });
  },
};
</script>

<template>
  <div class="container">
    <h1>{{ title }}</h1>

    <!-- stampo lista progetti -->
    <div v-for="project in projects">
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
