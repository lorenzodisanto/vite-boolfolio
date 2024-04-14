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

  methods: {
    // metodo chiamata api
    fetchProjects(endpoint = api.url + "projects") {
      axios.get(endpoint).then((response) => {
        // carico i dati nello store
        store.projects = response.data.data;
        // carico i link di paginazione nello store
        store.pageLinks = response.data.links;
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

      <!-- link paginazione recupero i link dallo store e li ciclo per stamparli-->
      <div class="mt-4">
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-end">
            <li
              v-for="link in store.pageLinks"
              @click="fetchProjects(link.url)"
              :class="{
                active: link.active,
                disabled: !link.url,
              }"
              class="page-item"
            >
              <a class="page-link" href="#" v-html="link.label"></a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
