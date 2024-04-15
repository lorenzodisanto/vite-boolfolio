<script>
import axios from "axios";

import { api } from "../store";

export default {
  data() {
    return {
      project: null,
    };
  },

  created() {
    const projectSlug = this.$route.params.slug;
    axios.get(api.url + `projects/${projectSlug}`).then((response) => {
      //   console.log(response.data);
      this.project = response.data;
    });
  },
};
</script>

<template>
  <!-- stampa pagina dettaglio provvisoria -->
  <div class="container my-5">
    <div class="card" v-if="project">
      <div class="card-body">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <div class="my-3">
          <span
            class="badge type fs-6"
            :style="'background-color: ' + project.type.color"
            >{{ project.type.label }}</span
          >
        </div>
        <div class="my-3">
          <span
            v-for="technology in project.technologies"
            class="badge rounded-pill me-2"
            :style="'background-color: ' + technology.color"
          >
            {{ technology.label }}
          </span>
        </div>
      </div>
      <img v-if="project.image" :src="project.image" class="img-fluid" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
