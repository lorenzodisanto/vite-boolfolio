<script>
// importo axios
import axios from "axios";

// importo lo store
import { api, store } from "../store";

// importo la Card
import ProjectCard from "./ProjectCard.vue";

// importo paginazione
import PaginationUi from "./ui/PaginationUi.vue";

export default {
  data() {
    return {
      store,
      pageLinks: [],
    };
  },

  components: { ProjectCard, PaginationUi },

  methods: {
    // metodo chiamata api
    fetchProjects(endpoint = api.url + "projects") {
      axios.get(endpoint).then((response) => {
        // carico i dati nello store
        store.projects = response.data.data;
        // link paginazione
        this.pageLinks = response.data.links;
      });
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <main>
    <div class="container my-4">
      <!-- griglia Card -->
      <div class="row row-cols-3 g-3">
        <project-card v-for="project in store.projects" :project="project" />
      </div>

      <!-- link paginazione -->
      <pagination-ui
        :pageLinks="pageLinks"
        @change-page="fetchProjects"
      ></pagination-ui>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
