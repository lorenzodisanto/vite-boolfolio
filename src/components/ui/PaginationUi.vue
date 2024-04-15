<script>
export default {
  // ricevo i link dal projectlist tramite props
  props: { pageLinks: Array },
  //dichiaro l'emit
  emit: ["change-page"],
};
</script>

<template>
  <!-- link paginazione  ciclo per stamparli-->
  <div class="mt-4">
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-end">
        <li
          v-for="link in pageLinks"
          @click="$emit('change-page', link.url)"
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
</template>

<style lang="scss" scoped></style>
