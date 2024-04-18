<script>
export default {
  // ricevo il contenuto del progetto via props
  props: { project: Object },

  computed: {
    // funzione anteprima descrizione
    abstract() {
      const description = this.project.description;
      return description.length > 100
        ? description.substr(0, 100) + " ..."
        : description;
    },
  },
};
</script>

<template>
  <div class="col">
    <router-link
      :to="{ name: 'project', params: { slug: project.slug } }"
      class="card-btn"
    >
      <div class="card h-100">
        <div class="cover">
          <img v-if="project.image" :src="project.image" class="card-img-top" />
          <span
            class="badge type fs-6"
            :style="'background-color: ' + project.type.color"
            >{{ project.type.label }}</span
          >
          <div class="tech">
            <span
              v-for="technology in project.technologies"
              class="badge rounded-pill me-2"
              :style="'background-color: ' + technology.color"
            >
              {{ technology.label }}
            </span>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ project.title }}</h5>
          <p class="card-text">
            {{ abstract }}
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.col {
  .card-btn {
    cursor: pointer;
    text-decoration: none;
  }
  &:hover {
    transform: scale(1.02);
  }
  .cover {
    position: relative;
    .badge.type {
      position: absolute;
      top: 15px;
      right: 15px;
    }
    .tech {
      position: absolute;
      bottom: 15px;
      left: 15px;
    }
  }
}
</style>
