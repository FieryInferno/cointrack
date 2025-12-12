<script lang="ts" setup>
  import { ref, defineAsyncComponent } from 'vue';

  const isClick = ref(false);
  const ModalAsync = defineAsyncComponent({ loader: () => import('./Modal.vue') });
  const FormAddCategoryAsync = defineAsyncComponent({ loader: () => import('./FormAddCategory.vue') });
</script>
<template>
  <button @click="isClick = !isClick">+ Add Category</button>
  <ModalAsync v-if="isClick" :titleButton="'+ Add Category'" :title="'Add New Category'" @close="isClick = false">
    <FormAddCategoryAsync v-if="isClick"/>
  </ModalAsync>
</template>