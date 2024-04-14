<script>
export default {
  // ricevo titolo dall'App via props
  props: { title: String },
};
</script>

<template>
  <header>
    <nav class="navbar text-bg-dark">
      <div class="container">
        <a class="navbar-brand text-white fs-3" href="#"> {{ title }} </a>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
}
</style>
