<script>
// importo axios
import axios from "axios";

// importo lo store
import { api, store } from "../store";

// importo la Card
import ProjectCard from "./ProjectCard.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: { ProjectCard },

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
  <main>
    <div class="container my-4">
      <div class="row row-cols-3 g-3">
        <project-card v-for="project in store.projects" :project="project" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
