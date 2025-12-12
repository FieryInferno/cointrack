<script lang="ts" setup>
  import Modal from './Modal.vue';
  import FormAddCategory from './FormAddCategory.vue';
</script>
<template>
  <Modal :titleButton="'+ Add Category'" :title="'Add New Category'">
    <FormAddCategory />
  </Modal>
</template>