<script>
export default {
  // ricevo titolo dall'App via props
  props: { title: String },
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg text-bg-dark">
      <div class="container">
        <a class="navbar-brand text-white fs-3" href="#">{{ title }}</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link :to="{ name: 'home' }" class="nav-link text-white">
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'blog' }" class="nav-link text-white">
                Blog
              </router-link>
            </li>
          </ul>
        </div>
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
