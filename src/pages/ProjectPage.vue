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
        <h1 :style="'color: ' + project.type.color">
          {{ project.title }}
        </h1>

        <div class="my-3">
          <span
            class="badge type fs-4"
            :style="'background-color: ' + project.type.color"
            >{{ project.type.label }}</span
          >
        </div>
        <div class="my-3">
          <span
            v-for="technology in project.technologies"
            class="badge rounded-pill me-2 fs-6"
            :style="'background-color: ' + technology.color"
          >
            {{ technology.label }}
          </span>
        </div>
        <p class="fs-5">{{ project.description }}</p>
      </div>
      <img v-if="project.image" :src="project.image" class="img-fluid" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
