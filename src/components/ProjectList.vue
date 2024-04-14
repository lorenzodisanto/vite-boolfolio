<script>
// importo axios
import axios from "axios";
// importo lo store
import { api, store } from "../store";
export default {
  data() {
    return {
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
  <div class="container my-4">
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

<style lang="scss" scoped></style>
