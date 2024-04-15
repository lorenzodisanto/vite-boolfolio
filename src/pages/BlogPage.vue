<script>
import ProjectList from "../components/ProjectList.vue";
export default {
  data() {
    return {
      title: "Boolfolio Home Page",
    };
  },

  components: { ProjectList },
};
</script>

<template>
  <project-list></project-list>
</template>

<style lang="scss" scoped></style>
