<script>
// importo header e footer e projectlist
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import ProjectList from "./components/ProjectList.vue";

export default {
  data() {
    return {
      title: "Boolfolio",
      author: "Lorenzo Di Santo",
    };
  },

  components: { AppHeader, AppFooter, ProjectList },
};
</script>

<template>
  <app-header :title="title"></app-header>
  <project-list></project-list>
  <app-footer :author="author"></app-footer>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
