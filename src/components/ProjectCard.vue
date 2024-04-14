<script>
export default {
  // ricevo il contenuto del progetto via props
  props: { project: Object },
};
</script>

<template>
  <div class="col">
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
          {{ project.description }}
        </p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">--- </small>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.col {
  z-index: -1;

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
